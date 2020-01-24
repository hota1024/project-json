import { AssetInterface } from '../Asset'

/*
 * Costume interface.
 */
export interface CostumeInterface extends AssetInterface {
  /**
   * Rotation center x.
   */
  rotationCenterX: number

  /**
   * Rotation center y.
   */
  rotationCenterY: number
}
