import { VariableInterface } from '../Variable'
import { ListInterface } from '../List'
import { HasScopeInterface } from '../HasScope'
import { UseTargetInterface } from '../UseTarget'

/*
 * Data interface.
 */
export interface DataInterface<DataType = any>
  extends HasScopeInterface,
    UseTargetInterface {
  /**
   * ID.
   */
  id: string

  /**
   * Name.
   */
  name: string

  /**
   * Value.
   */
  value: DataType

  /**
   * Is variable.
   */
  isVariable(): this is VariableInterface

  /**
   * Is list.
   */
  isList(): this is ListInterface
}
