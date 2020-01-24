import axios from 'axios'
import { ProjectJson } from './types/ProjectJson'
;(async () => {
  const response = await axios.get<ProjectJson>(
    'https://projects.scratch.mit.edu/360757304'
  )
  const project = response.data

  const sprite = project.targets[1]
  const blocks = sprite.blocks

  if (Array.isArray(blocks[0])) {
    blocks
  }
})()
