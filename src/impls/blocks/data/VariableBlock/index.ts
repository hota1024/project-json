import { Block } from '../../../../abstracts/Block'
import { DataBlockInterface } from '../../../../interfaces/DataBlock'
import { NormalBlockInterface } from '../../../../interfaces/NormalBlock'
import { VariableBlockInterface } from '../../../../interfaces/VariableBlock'
import { ListBlockInterface } from '../../../../interfaces/ListBlock'

/*
 * VariableBlock class.
 */
export class VariableBlock extends Block implements VariableBlockInterface {
  /**
   * Variable id.
   */
  variableId!: string

  /**
   * Name.
   */
  name!: string

  /**
   * Constructor.
   */
  constructor(data: {
    id: string
    x: number
    y: number
    variableId: string
    name: string
  }) {
    super(data)
    this.variableId = data.variableId
    this.name = data.name
  }

  /**
   * Is data block.
   */
  isDataBlock(): this is DataBlockInterface {
    return true
  }

  /**
   * Is normal block.
   */
  isNormalBlock(): this is NormalBlockInterface {
    return false
  }

  /**
   * Is variable.
   */
  isVariable(): this is VariableBlockInterface {
    return true
  }

  /**
   * Is list.
   */
  isList(): this is ListBlockInterface {
    return false
  }
}
