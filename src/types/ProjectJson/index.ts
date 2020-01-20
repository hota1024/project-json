import { OPCode } from '../OPCode'
import { ExtensionCode } from '../ExtensionCode'
import { MonitorMode } from '../MonitorMode'
import { RotationStyle } from '../RotationStyle'

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
            comment?: string
          }
        | [number, string, string, number, number]
    }
    comments: {
      [id: string]: {
        blockId?: string
        x: number
        y: number
        width: number
        height: number
        minimized: boolean
        text: string
      }
    }
    currentCostume: number
    costumes: {
      assetId: string
      name: string
      bitmapResolution: number
      md5text: string
      dataFormat: string
      rotationCenterX: number
      rotationCenterY: number
    }[]
    volume: number
    layerOrder: number
    visible: boolean
    x: number
    y: number
    size: number
    direction: number
    draggable: boolean
    rotationStyle: RotationStyle
  }[]
  monitors: {
    id: string
    mode: MonitorMode
    opcode: OPCode
    params: {
      [name: string]: any
    }
    spriteName?: string
    value: any
    width: number
    height: number
    x: number
    y: number
    visible: boolean
    sliderMin: number
    sliderMax: number
    isDiscrete: boolean
  }[]
  extensions: ExtensionCode[]
  meta: {
    semver: string
    vm: string
    agent: string
  }
}
