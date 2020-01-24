import { TargetInterface } from '../Target'
import { MonitorInterface } from '../Monitor'
import { ExtensionCode } from '../../types/ExtensionCode'
import { MetaDataInterface } from '../MetaData'
import { VariableInterface } from '../Variable'
import { ListInterface } from '../List'
import { StageInterface } from '../Stage'
import { SpriteInterface } from '../Sprite'
import { AssetInterface } from '../Asset'

/*
 * Project interface.
 */
export interface ProjectInterface {
  /**
   * Targets.
   */
  targets: TargetInterface[]

  /**
   * Monitors.
   */
  monitors: MonitorInterface[]

  /**
   * Extensions.
   */
  extensions: ExtensionCode[]

  /**
   * Meta data.
   */
  meta: MetaDataInterface

  /**
   * Has extension.
   *
   * @param extension
   */
  hasExtension(extension: ExtensionCode): boolean

  /**
   * Variables.
   */
  variables(): VariableInterface[]

  /**
   * Lists.
   */
  lists(): ListInterface[]

  /**
   * Stage.
   */
  stage(): StageInterface

  /**
   * Sprites.
   */
  sprites(): SpriteInterface[]

  /**
   * Get sprites.
   *
   * @param matcherCallback
   */
  getSprites(
    matcherCallback: (sprite: SpriteInterface, index: number) => boolean
  ): SpriteInterface | undefined

  /**
   * Get sprite.
   *
   * @param name
   */
  getSprite(name: string): SpriteInterface | undefined

  /**
   * Get sprite.
   *
   * @param matcherCallback
   */
  getSprite(
    matcherCallback: (sprite: SpriteInterface, index: number) => boolean
  ): SpriteInterface | undefined

  /**
   * Get asset.
   *
   * @param id
   */
  getAsset(id: string): AssetInterface | undefined
}
