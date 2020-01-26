import { ProjectJsonParserInterface } from '../../interfaces/ProjectJsonParser'
import { Project } from '../Project'
import { ProjectJson } from '../../types/ProjectJson'
import { Target } from '../../abstracts/Target'
import { MonitorInterface } from '../../interfaces/Monitor'
import { ExtensionCode } from '../../types/ExtensionCode'
import { MetaDataInterface } from '../../interfaces/MetaData'
import { Stage } from '../targets/Stage'
import { Variable } from '../data/Variable'
import { List } from '../data/List'
import { VariableBlock } from '../blocks/data/VariableBlock'
import { ListBlock } from '../blocks/data/ListBlock'
import { NormalBlock } from '../blocks/NormalBlock'
import { Comment } from '../Comment'
import { Costume } from '../assets/Costume'
import { Sound } from '../assets/Sound'
import { Sprite } from '../targets/Sprite'
import { BroadcastInterface } from '../../interfaces/Broadcast'
import axios, { AxiosRequestConfig } from 'axios'

/*
 * ProjectJsonParser class.
 */
export class ProjectJsonParser implements ProjectJsonParserInterface {
  /**
   * Parse.
   *
   * @param json
   */
  parse(json: ProjectJson) {
    const targets: Target[] = []
    const monitors: MonitorInterface[] = []
    const extensions: ExtensionCode[] = []
    const meta: MetaDataInterface = json.meta

    const project = new Project({
      targets,
      monitors,
      extensions,
      meta
    })

    for (const target of json.targets) {
      const variables = Object.entries(target.variables).map(this.parseVariable)
      const lists = Object.entries(target.lists).map(this.parseList)
      const broadcasts = Object.entries(target.broadcasts).map(
        this.parseBroadcast
      )
      const blocks = Object.entries(target.blocks).map(([id, data]) => {
        if (Array.isArray(data)) {
          const name = data[1]
          const dataId = data[2]
          const x = data[3]
          const y = data[4]
          if (target.variables[id]) {
            return new VariableBlock({
              id,
              name,
              variableId: dataId,
              x,
              y
            })
          } else {
            return new ListBlock({
              id,
              name,
              listId: dataId,
              x,
              y
            })
          }
        } else {
          return new NormalBlock({
            id,
            x: data.x,
            y: data.y,
            nextId: data.next,
            parentId: data.parent,
            opcode: data.opcode,
            inputs: data.inputs,
            fields: data.fields
          })
        }
      })
      const comments = Object.entries(target.comments).map(([id, data]) => {
        return new Comment({
          id,
          blockId: data.blockId,
          x: data.x,
          y: data.y,
          width: data.width,
          height: data.height,
          text: data.text,
          minimized: data.minimized
        })
      })
      const costumes = target.costumes.map(costume => {
        return new Costume({
          id: costume.assetId,
          name: costume.name,
          md5: costume.md5ext,
          dataFormat: costume.dataFormat,
          rotationCenterX: costume.rotationCenterX,
          rotationCenterY: costume.rotationCenterY
        })
      })
      const sounds = target.sounds.map(sound => {
        return new Sound({
          id: sound.assetId,
          name: sound.name,
          md5: sound.md5ext,
          dataFormat: sound.dataFormat,
          format: sound.format,
          rate: sound.rate,
          sampleCount: sound.sampleCount
        })
      })

      const data = {
        project,
        variables,
        lists,
        broadcasts,
        blocks,
        comments,
        costumes,
        sounds,
        volume: target.volume,
        layerOrder: target.layerOrder
      }

      if (target.isStage) {
        targets.push(
          new Stage({
            ...data,
            tempo: target.tempo,
            videoTransparency: target.videoTransparency,
            videoState: target.videoState,
            textToSpeechLanguage: target.textToSpeechLanguage
          })
        )
      } else {
        targets.push(
          new Sprite({
            ...data,
            name: target.name,
            visible: target.visible,
            x: target.x,
            y: target.y,
            size: target.size,
            direction: target.direction,
            draggable: target.draggable,
            rotationStyle: target.rotationStyle
          })
        )
      }
    }

    return project
  }

  /**
   * Download.
   *
   * @param id
   */
  async download(id: number | string, config?: AxiosRequestConfig) {
    const response = await axios.get<ProjectJson>(
      `https://projects.scratch.mit.edu/${id}`,
      config
    )
    const json = response.data
    return this.parse(json)
  }

  private parseVariable([id, data]: [string, [string, any]]) {
    return new Variable({
      id,
      name: data[0],
      value: data[1]
    })
  }

  private parseList([id, data]: [string, [string, any[]]]) {
    return new List({
      id,
      name: data[0],
      value: data[1]
    })
  }

  private parseBroadcast([id, name]: [string, string]) {
    const broadcast: BroadcastInterface = {
      id,
      name
    }
    return broadcast
  }
}

console.log('OK')
;(async () => {
  console.log('OK async')
  let res = await axios.get('https://projects.scratch.mit.edu/357137675')
  let data = res.data

  const parser = new ProjectJsonParser()
  const project = parser.parse(data)

  console.log(project.sprites()[0].costumes())
})()
