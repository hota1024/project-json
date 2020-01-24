import { MonitorMode } from '../../types/MonitorMode'
import { OPCode } from '../../types/OPCode'

/*
 * Monitor interface.
 */
export interface MonitorInterface {
  /**
   * ID.
   */
  id: string

  /**
   * Mode.
   */
  mode: MonitorMode

  /**
   * Opcode.
   */
  opcode: OPCode

  /**
   * Params.
   */
  params: any

  /**
   * Sprite name.
   */
  spriteName?: string

  /**
   * Value.
   */
  value: any

  /**
   * Width.
   */
  width: number

  /**
   * Height.
   */
  height: number

  /**
   * X.
   */
  x: number

  /**
   * Y.
   */
  y: number

  /**
   * Visible.
   */
  visible: boolean
}
