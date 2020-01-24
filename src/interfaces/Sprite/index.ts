import { TargetInterface } from '../Target'
import { RotationStyle } from '../../types/RotationStyle'

/*
 * Sprite interface.
 */
export interface SpriteInterface extends TargetInterface {
  /**
   * Name.
   */
  name: string

  /**
   * Visible.
   */
  visible: boolean

  /**
   * X.
   */
  x: number

  /**
   * Y.
   */
  y: number

  /**
   * Size.
   */
  size: number

  /**
   * Direction
   */
  direction: number

  /**
   * Draggable.
   */
  draggable: boolean

  /**
   * Rotation style.
   */
  rotationStyle: RotationStyle
}
