import { CostumeInterface } from '../Costume'
import { SoundInterface } from '../Sound'
import { UseTargetInterface } from '../UseTarget'

/*
 * Asset interface.
 */
export interface AssetInterface extends UseTargetInterface {
  /**
   * ID.
   */
  id: string

  /**
   * Name.
   */
  name: string

  /**
   * MD5 text.
   */
  md5: string

  /**
   * Data format.
   */
  dataFormat: string

  /**
   * URL.
   */
  url(): string

  /**
   * Is costume.
   */
  isCostume(): this is CostumeInterface

  /**
   * Is sound.
   */
  isSound(): this is SoundInterface
}
