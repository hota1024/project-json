import { BlockInterface } from '../Block'
import { VariableBlockInterface } from '../VariableBlock'
import { ListBlockInterface } from '../ListBlock'

/*
 * DataBlock interface.
 */
export interface DataBlockInterface extends BlockInterface {
  /**
   * Name.
   */
  name: string

  /**
   * Is variable.
   */
  isVariable(): this is VariableBlockInterface

  /**
   * Is list.
   */
  isList(): this is ListBlockInterface
}
