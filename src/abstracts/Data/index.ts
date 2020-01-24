import { DataInterface } from '../../interfaces/Data'
import { VariableInterface } from '../../interfaces/Variable'
import { ListInterface } from '../../interfaces/List'
import { UseTarget } from '../../classes/UseTarget'

/*
 * Data class.
 */
export abstract class Data<DataType = any> extends UseTarget
  implements DataInterface<DataType> {
  /**
   * ID.
   */
  id!: string

  /**
   * Name.
   */
  name!: string

  /**
   * Value.
   */
  value!: DataType

  constructor(data: { id: string; name: string; value: DataType }) {
    super()
    this.id = data.id
    this.name = data.name
    this.value = data.value
  }

  /**
   * Is variable.
   */
  abstract isVariable(): this is VariableInterface

  /**
   * Is list.
   */
  abstract isList(): this is ListInterface

  /**
   * Is local.
   */
  isLocal() {
    return this.target.isSprite()
  }

  /**
   * Is global.
   */
  isGlobal() {
    return this.target.isStage()
  }
}
