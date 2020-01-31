import { VariableInterface } from '../Variable'
import { ListInterface } from '../List'
import { BroadcastInterface } from '../Broadcast'
import { BlockInterface } from '../Block'
import { CommentInterface } from '../Comment'
import { AssetInterface } from '../Asset'
import { CostumeInterface } from '../Costume'
import { SoundInterface } from '../Sound'
import { UseProjectInterface } from '../UseProject'
import { StageInterface } from '../Stage'
import { SpriteInterface } from '../Sprite'
import { BlockCategory } from '../../types'

/*
 * Target interface.
 */
export interface TargetInterface extends UseProjectInterface {
  /**
   * Volume.
   */
  volume: number

  /**
   * Layer order.
   */
  layerOrder: number

  /**
   * Is stage.
   */
  isStage(): this is StageInterface

  /**
   * Is sprite.
   */
  isSprite(): this is SpriteInterface

  /**
   * Variables.
   */
  variables(): VariableInterface[]

  /**
   * Lists.
   */
  lists(): ListInterface[]

  /**
   * Broadasts.
   */
  broadcasts(): BroadcastInterface[]

  /**
   * Blocks.
   */
  blocks(): BlockInterface[]

  /**
   * Get block.
   *
   * @param id
   */
  getBlock(id: string): BlockInterface | undefined

  /**
   * Comments.
   */
  comments(): CommentInterface[]

  /**
   * Assets.
   */
  assets(): AssetInterface[]

  /**
   * Costumes.
   */
  costumes(): CostumeInterface[]

  /**
   * Sounds.
   */
  sounds(): SoundInterface[]

  /**
   * Get category blocks.
   *
   * @param category
   */
  getCategoryBlocks(category: BlockCategory): BlockInterface[]
}
