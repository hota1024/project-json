import { Data } from '../../../abstracts/Data'
import { DataInterface } from '../../../interfaces/Data'

/*
 * Variable class.
 */
export class Variable extends Data implements DataInterface {
  /**
   * Is list.
   */
  isList() {
    return false
  }

  /**
   * Is variable.
   */
  isVariable() {
    return true
  }
}
