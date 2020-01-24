import { BlockInterface } from '../Block'

/*
 * Comment interface.
 */
export interface CommentInterface {
  /**
   * ID.
   */
  id: string

  /**
   * Block ID.
   */
  blockId?: string

  /**
   * X.
   */
  x: number

  /**
   * Y.
   */
  y: number

  /**
   * Width.
   */
  width: number

  /**
   * Height.
   */
  height: number

  /**
   * Text.
   */
  text: string

  /**
   * Is minimazed.
   */
  minimized: boolean

  /**
   * Block.
   */
  block(): BlockInterface | undefined
}
