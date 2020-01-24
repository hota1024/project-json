import { ProjectInterface } from '../../interfaces/Project'
import { Target } from '../../abstracts/Target'
import { MonitorInterface } from '../../interfaces/Monitor'
import { ExtensionCode } from '../../types/ExtensionCode'
import { MetaDataInterface } from '../../interfaces/MetaData'
import { Stage } from '../targets/Stage'
import { Sprite } from '../targets/Sprite'
import { UseProject } from '../../classes/UseProject'
import { AssetInterface } from '../../interfaces/Asset'

/*
 * Project class.
 */
export class Project implements ProjectInterface {
  /**
   * Member assets.
   */
  private mAssets: AssetInterface[] = []

  /**
   * Targets.
   */
  targets!: Target[]

  /**
   * Monitors.
   */
  monitors!: MonitorInterface[]

  /**
   * Extensions.
   */
  extensions!: ExtensionCode[]

  /**
   * Meta data.
   */
  meta!: MetaDataInterface

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    targets: Target[]
    monitors: MonitorInterface[]
    extensions: ExtensionCode[]
    meta: MetaDataInterface
  }) {
    this.targets = data.targets
    this.monitors = data.monitors
    this.extensions = data.extensions
    this.meta = data.meta

    for (const target of this.targets) {
      this.mAssets.push(...target.assets())
    }

    this.registerProject(this.targets)
  }

  /**
   * Register project.
   *
   * @param projectUsers
   */
  private registerProject(projectUsers: UseProject[]) {
    for (const user of projectUsers) {
      user.setProject(this)
    }
  }

  /**
   * Has extension.
   *
   * @param extension
   */
  hasExtension(extension: ExtensionCode) {
    return !!this.extensions.find(code => code === extension)
  }

  /**
   * Variables.
   */
  variables() {
    return this.stage().variables()
  }

  /**
   * Lists.
   */
  lists() {
    return this.stage().lists()
  }

  /**
   * Stage.
   */
  stage() {
    return this.targets.find(target => target.isStage()) as Stage
  }

  /**
   * Sprites.
   */
  sprites() {
    return this.targets.filter(target => target.isSprite()) as Sprite[]
  }
  /**
   * Get sprites.
   *
   * @param matcherCallback
   */
  getSprites(matcherCallback: (sprite: Sprite, index: number) => boolean) {
    return this.sprites().find(matcherCallback)
  }

  /**
   * Get sprite.
   *
   * @param name
   */
  getSprite(name: string): Sprite | undefined

  /**
   * Get sprite.
   *
   * @param matcherCallback
   */
  getSprite(
    matcherCallback: (sprite: Sprite, index: number) => boolean
  ): Sprite | undefined

  /**
   * Get sprite.
   *
   * @param nameOrCallback
   */
  getSprite(
    nameOrCallback: string | ((sprite: Sprite, index: number) => boolean)
  ) {
    if (typeof nameOrCallback === 'function') {
      return this.sprites().find(nameOrCallback)
    }
    return this.sprites().find(sprite => sprite.name === nameOrCallback)
  }

  /**
   * Get asset.
   *
   * @param id
   */
  getAsset(id: string) {
    return this.mAssets.find(asset => asset.id === id)
  }
}
