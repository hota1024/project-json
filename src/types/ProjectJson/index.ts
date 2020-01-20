import { OPCode } from '../OPCode'
import { ExtensionCode } from '../ExtensionCode'

export type ProjectJson = {
  targets: {
    isStage: true
    name: string
    variables: {
      [id: string]: [string, any]
    }
    list: {
      [id: string]: [string, any[]]
    }
    broadcasts: {
      [id: string]: string
    }
    blocks: {
      [id: string]:
        | {
            opcode: OPCode
            next?: string
            parent?: string
            inputs: {
              [name: string]: any[]
            }
            fields: {
              [name: string]: any[]
            }
            shadow: boolean
            topLevel: boolean
            mutation?: {
              tagName: string
              children: []
              proccode: string
              argumentids: string
              argumentnames: string
              argumentdefaults: string
              wrap: string
            }
            x?: number
            y?: number
          }
        | [number, string, string, number, number]
    }
  }[]
  monitors: {
    id: string
    mode: string
    opcode: OPCode
  }[]
  extensions: ExtensionCode[]
}
