import { AssetInterface } from '../Asset'

/*
 * Sound interface.
 */
export interface SoundInterface extends AssetInterface {
  /**
   * Format.
   */
  format: string

  /**
   * Rate.
   */
  rate: number

  /**
   * Sample count.
   */
  sampleCount: number
}
