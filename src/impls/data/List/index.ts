import { Data } from '../../../abstracts/Data'
import { DataInterface } from '../../../interfaces/Data'

/*
 * List class.
 */
export class List extends Data implements DataInterface {
  /**
   * Is list.
   */
  isList() {
    return true
  }

  /**
   * Is variable.
   */
  isVariable() {
    return false
  }
}
