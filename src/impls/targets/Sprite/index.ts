import { SpriteInterface } from '../../../interfaces/Sprite'
import { Target } from '../../../abstracts/Target'
import { RotationStyle } from '../../../types/RotationStyle'
import { StageInterface } from '../../../interfaces/Stage'
import { ProjectInterface } from '../../../interfaces/Project'
import { VariableInterface } from '../../../interfaces/Variable'
import { BlockInterface } from '../../../interfaces/Block'
import { ListInterface } from '../../../interfaces/List'
import { BroadcastInterface } from '../../../interfaces/Broadcast'
import { CommentInterface } from '../../../interfaces/Comment'
import { CostumeInterface } from '../../../interfaces/Costume'
import { SoundInterface } from '../../../interfaces/Sound'

/*
 * Sprite class.
 */
export class Sprite extends Target implements SpriteInterface {
  /**
   * Name.
   */
  name!: string

  /**
   * Visible.
   */
  visible!: boolean

  /**
   * X.
   */
  x!: number

  /**
   * Y.
   */
  y!: number

  /**
   * Size.
   */
  size!: number

  /**
   * Direction
   */
  direction!: number

  /**
   * Draggable.
   */
  draggable!: boolean

  /**
   * Rotation style.
   */
  rotationStyle!: RotationStyle

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    project: ProjectInterface
    name: string
    variables: VariableInterface[]
    lists: ListInterface[]
    broadcasts: BroadcastInterface[]
    blocks: BlockInterface[]
    comments: CommentInterface[]
    costumes: CostumeInterface[]
    sounds: SoundInterface[]
    volume: number
    layerOrder: number
    visible: boolean
    x: number
    y: number
    size: number
    direction: number
    draggable: boolean
    rotationStyle: RotationStyle
  }) {
    super(data)
    this.name = data.name
    this.visible = data.visible
    this.x = data.x
    this.y = data.y
    this.size = data.size
    this.direction = data.direction
    this.draggable = data.draggable
    this.rotationStyle = data.rotationStyle
  }

  /**
   * Is sprite.
   */
  isSprite(): this is SpriteInterface {
    return true
  }

  /**
   * Is stage.
   */
  isStage(): this is StageInterface {
    return false
  }
}
