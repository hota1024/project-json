import axios from 'axios'
import { ProjectJson } from '../src/types/ProjectJson'
import { ProjectJsonParser } from '../src/impls/ProjectJsonParser'
import { Project } from '../src/impls/Project'
import { BlockCategory } from '../src/types/BlockCategory'

const downloadProjectJson = async (id: number) => {
  const { data } = await axios.get<ProjectJson>(
    `https://projects.scratch.mit.edu/${id}`
  )
  return data
}

describe('Parser test', () => {
  let projectJson: ProjectJson
  let parser: ProjectJsonParser
  let project: Project

  beforeAll(async () => {
    projectJson = await downloadProjectJson(360785472)
    parser = new ProjectJsonParser()
    project = parser.parse(projectJson)
  })

  test('project.variables() returns all global variables.', () => {
    const variables = project.variables()
    expect(Array.isArray(variables)).toBeTruthy()
    expect(variables.map(variable => variable.isGlobal())).not.toContain(false)
  })

  test('project.stage() returns stage.', () => {
    const stage = project.stage()
    expect(stage.isStage()).toBeTruthy()
  })

  test('project.sprites() should return all sprites.', () => {
    const sprites = project.sprites()
    expect(Array.isArray(sprites)).toBeTruthy()
    expect(sprites.map(sprite => sprite.isSprite())).not.toContain(false)
  })
  test('project.getSprite(string) should get sprite by sprite name.', () => {
    const sprite = project.getSprite('Cat')
    expect(sprite).not.toBeUndefined()
    if (!sprite) return
    expect(sprite.isSprite()).toBeTruthy()
  })

  test('Asset#url should return asset url', () => {
    const asset = project.getAsset('cd21514d0531fdffb22204e0ec5ed84a')
    if (!asset) return
    expect(asset.url()).toBe(
      'https://assets.scratch.mit.edu/internalapi/asset/b7853f557e4426412e64bb3da6531a99.svg/get'
    )
  })

  test('Block.isCategoryBlock should return wether the block belongs to the category', () => {
    const sprite = project.getSprite('Cat')
    if (!sprite) return
    const motionBlock = sprite.getBlock('U]EJa+qUpLM;1Ae2bc2_')
    if (!motionBlock) return
    const variableBlock = sprite.getBlock('`jEk@4|i[#Fk?(8x)AV.-my variable')
    if (!variableBlock) return

    expect(motionBlock.isCategoryBlock(BlockCategory.Motion)).toBeTruthy()
    expect(motionBlock.isCategoryBlock(BlockCategory.Music)).toBeFalsy()

    expect(variableBlock.isCategoryBlock(BlockCategory.Unknown)).toBeTruthy()
  })
})
