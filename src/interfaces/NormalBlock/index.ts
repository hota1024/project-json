import { BlockInterface } from '../Block'
import { OPCode } from '../../types/OPCode'

/*
 * NormalBlock interface.
 */
export interface NormalBlockInterface extends BlockInterface {
  /**
   * Next ID.
   */
  nextId?: string

  /**
   * Parent ID.
   */
  parentId?: string

  /**
   * Operation code.
   */
  opcode: OPCode

  /**
   * Inputs.
   */
  inputs: any

  /**
   * Fields.
   */
  fields: any

  /**
   * Next block.
   */
  next(): NormalBlockInterface | undefined

  /**
   * Parent block.
   */
  parent(): NormalBlockInterface | undefined

  /**
   * Has next.
   */
  hasNext(): boolean

  /**
   * Hax parent.
   */
  hasParent(): boolean

  /**
   * Is shadow.
   */
  isShadow(): boolean

  /**
   * Is top level.
   */
  isTopLevel(): boolean
}
