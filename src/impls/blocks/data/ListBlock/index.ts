import { Block } from '../../../../abstracts/Block'
import { DataBlockInterface } from '../../../../interfaces/DataBlock'
import { NormalBlockInterface } from '../../../../interfaces/NormalBlock'
import { VariableBlockInterface } from '../../../../interfaces/VariableBlock'
import { ListBlockInterface } from '../../../../interfaces/ListBlock'

/*
 * ListBlock class.
 */
export class ListBlock extends Block implements ListBlockInterface {
  /**
   * List id.
   */
  listId!: string

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
    listId: string
    name: string
  }) {
    super(data)
    this.listId = data.listId
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
    return false
  }

  /**
   * Is list.
   */
  isList(): this is ListBlockInterface {
    return true
  }
}
