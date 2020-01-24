import { CommentInterface } from '../../interfaces/Comment'
import { UseTarget } from '../../classes/UseTarget'

/*
 * Comment class.
 */
export class Comment extends UseTarget implements CommentInterface {
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
  x!: number

  /**
   * Y.
   */
  y!: number

  /**
   * Width.
   */
  width!: number

  /**
   * Height.
   */
  height!: number

  /**
   * Text.
   */
  text!: string

  /**
   * Is minimazed.
   */
  minimized!: boolean

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    id: string
    blockId?: string
    x: number
    y: number
    width: number
    height: number
    text: string
    minimized: boolean
  }) {
    super()
    this.id = data.id
    this.blockId = data.blockId
    this.x = data.x
    this.y = data.y
    this.width = data.width
    this.height = data.height
    this.text = data.text
    this.minimized = data.minimized
  }

  /**
   * Block.
   */
  block() {
    return this.blockId ? this.target.getBlock(this.blockId) : void 0
  }
}
