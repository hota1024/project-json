import { DataBlockInterface } from '../DataBlock'
import { NormalBlockInterface } from '../NormalBlock'
import { BlockCategory } from '../../types/BlockCategory'
import { UseTargetInterface } from '../UseTarget'

/*
 * Block interface.
 */
export interface BlockInterface extends UseTargetInterface {
  /**
   * ID.
   */
  id: string

  /**
   * X.
   */
  x: number

  /**
   * Y.
   */
  y: number

  /**
   * Is data block.
   */
  isDataBlock(): this is DataBlockInterface

  /**
   * Is normal block.
   */
  isNormalBlock(): this is NormalBlockInterface

  /**
   * Is category block.
   *
   * @param category
   */
  isCategoryBlock(category: BlockCategory): boolean

  /**
   * Category.
   */
  category(): BlockCategory
}
