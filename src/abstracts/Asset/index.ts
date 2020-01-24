import { AssetInterface } from '../../interfaces/Asset'
import { CostumeInterface } from '../../interfaces/Costume'
import { SoundInterface } from '../../interfaces/Sound'
import { UseTarget } from '../../classes/UseTarget'
import { SpriteInterface } from '../../interfaces/Sprite'

/*
 * Asset class.
 */
export abstract class Asset extends UseTarget implements AssetInterface {
  /**
   * ID.
   */
  id!: string

  /**
   * Name.
   */
  name!: string

  /**
   * MD5 text.
   */
  md5!: string

  /**
   * Data format.
   */
  dataFormat!: string

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
  }) {
    super()
    this.id = data.id
    this.name = data.name
    this.md5 = data.md5
    this.dataFormat = data.dataFormat
  }

  /**
   * URL.
   */
  url() {
    return `https://assets.scratch.mit.edu/internalapi/asset/${this.md5}/get/`
  }

  /**
   * Is costume.
   */
  abstract isCostume(): this is CostumeInterface

  /**
   * Is sound.
   */
  abstract isSound(): this is SoundInterface
}
