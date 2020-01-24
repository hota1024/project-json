import { Asset } from '../../../abstracts/Asset'
import { CostumeInterface } from '../../../interfaces/Costume'
import { SoundInterface } from '../../../interfaces/Sound'

/*
 * Sound class.
 */
export class Sound extends Asset implements SoundInterface {
  /**
   * Format.
   */
  format!: string

  /**
   * Rate.
   */
  rate!: number

  /**
   * Sample count.
   */
  sampleCount!: number

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
    format: string
    rate: number
    sampleCount: number
  }) {
    super(data)
    this.format = data.format
    this.rate = data.rate
    this.sampleCount = data.sampleCount
  }

  /**
   * Is costume.
   */
  isCostume(): this is CostumeInterface {
    return false
  }

  /**
   * Is sound.
   */
  isSound(): this is SoundInterface {
    return true
  }
}
