import { Asset } from '../../../abstracts/Asset'
import { CostumeInterface } from '../../../interfaces/Costume'
import { SoundInterface } from '../../../interfaces/Sound'

/*
 * Costume class.
 */
export class Costume extends Asset implements CostumeInterface {
  /**
   * Rotation center x.
   */
  rotationCenterX!: number

  /**
   * Rotation center y.
   */
  rotationCenterY!: number

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    id: string
    name: string
    md5: string
    dataFormat: string
    rotationCenterX: number
    rotationCenterY: number
  }) {
    super(data)
    this.rotationCenterX = data.rotationCenterX
    this.rotationCenterY = data.rotationCenterY
  }

  /**
   * Is costume.
   */
  isCostume(): this is CostumeInterface {
    return true
  }

  /**
   * Is sound.
   */
  isSound(): this is SoundInterface {
    return true
  }
}
