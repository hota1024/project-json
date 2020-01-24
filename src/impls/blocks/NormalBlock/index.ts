import { NormalBlockInterface } from '../../../interfaces/NormalBlock'
import { OPCode } from '../../../types/OPCode'
import { Block } from '../../../abstracts/Block'

/*
 * NormalBlock class.
 */
export class NormalBlock extends Block implements NormalBlockInterface {
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
  opcode!: OPCode

  /**
   * Inputs.
   */
  inputs: any

  /**
   * Fields.
   */
  fields: any

  /**
   * Member shadow.
   */
  private mShadow!: boolean

  /**
   * Member is top level.
   */
  private mIsTopLevel!: boolean

  /**
   * Constructor.
   */
  constructor(data: {
    id: string
    x: number
    y: number
    nextId?: string
    parentId?: string
    opcode: OPCode
    inputs: any
    fields: any
  }) {
    super(data)
    this.nextId = data.nextId
    this.parentId = data.parentId
    this.opcode = data.opcode
    this.inputs = data.inputs
    this.fields = data.fields
  }

  /**
   * Next block.
   */
  next() {
    if (typeof this.nextId === 'string') {
      return this.target.getBlock(this.nextId) as NormalBlockInterface
    }
    return undefined
  }

  /**
   * Parent block.
   */
  parent() {
    if (typeof this.parentId === 'string') {
      return this.target.getBlock(this.parentId) as NormalBlockInterface
    }
    return undefined
  }

  /**
   * Has next.
   */
  hasNext() {
    return !!this.nextId
  }

  /**
   * Hax parent.
   */
  hasParent() {
    return !!this.parentId
  }

  /**
   * Is shadow.
   */
  isShadow() {
    return this.mShadow
  }

  /**
   * Is top level.
   */
  isTopLevel() {
    return this.mIsTopLevel
  }

  /**
   * Is data block.
   */
  isDataBlock() {
    return false
  }

  /**
   * Is normal block.
   */
  isNormalBlock() {
    return true
  }
}
