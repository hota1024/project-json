import { TargetInterface } from '../../interfaces/Target'
import { BlockInterface } from '../../interfaces/Block'
import { VariableInterface } from '../../interfaces/Variable'
import { ListInterface } from '../../interfaces/List'
import { BroadcastInterface } from '../../interfaces/Broadcast'
import { CommentInterface } from '../../interfaces/Comment'
import { AssetInterface } from '../../interfaces/Asset'
import { CostumeInterface } from '../../interfaces/Costume'
import { SoundInterface } from '../../interfaces/Sound'
import { UseProject } from '../../classes/UseProject'
import { ProjectInterface } from '../../interfaces/Project'
import { StageInterface } from '../../interfaces/Stage'
import { SpriteInterface } from '../../interfaces/Sprite'
import { UseTargetInterface } from '../../interfaces/UseTarget'
import { BlockCategory } from '../../types'

/*
 * Target class.
 */
export abstract class Target extends UseProject implements TargetInterface {
  /**
   * Member variables.
   */
  private mVariables!: VariableInterface[]

  /**
   * Member lists.
   */
  private mLists!: ListInterface[]

  /**
   * Member broadcasts.
   */
  private mBroadcasts!: BroadcastInterface[]

  /**
   * Member blocks.
   */
  private mBlocks!: BlockInterface[]

  /**
   * Member comments.
   */
  private mComments!: CommentInterface[]

  /**
   * Member assets.
   */
  private mAssets!: AssetInterface[]

  /**
   * Member costume.
   */
  private mCostumes!: CostumeInterface[]

  /**
   * Member sounds.
   */
  private mSounds!: SoundInterface[]

  /**
   * Volume.
   */
  volume: number

  /**
   * Layer order.
   */
  layerOrder: number

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    project: ProjectInterface
    variables: VariableInterface[]
    lists: ListInterface[]
    broadcasts: BroadcastInterface[]
    blocks: BlockInterface[]
    comments: CommentInterface[]
    costumes: CostumeInterface[]
    sounds: SoundInterface[]
    volume: number
    layerOrder: number
  }) {
    super(data.project)
    this.mVariables = data.variables
    this.mLists = data.lists
    this.mBroadcasts = data.broadcasts
    this.mBlocks = data.blocks
    this.mComments = data.comments
    this.mCostumes = data.costumes
    this.mSounds = data.sounds
    this.volume = data.volume
    this.layerOrder = data.layerOrder

    this.mAssets = [...this.mCostumes, ...this.mSounds]

    this.registerUsers(this.mVariables)
    this.registerUsers(this.mLists)
    this.registerUsers(this.mBlocks)
    this.registerUsers(this.mAssets)
  }

  /**
   * Register users.
   *
   * @param users
   */
  private registerUsers(users: UseTargetInterface[]) {
    for (const user of users) {
      user.setTarget(this)
    }
  }

  /**
   * Is stage.
   */
  abstract isStage(): this is StageInterface

  /**
   * Is sprite.
   */
  abstract isSprite(): this is SpriteInterface

  variables() {
    return this.mVariables
  }

  lists() {
    return this.mLists
  }

  broadcasts() {
    return this.mBroadcasts
  }

  blocks() {
    return this.mBlocks
  }

  getBlock(id: string) {
    return this.blocks().find(block => block.id === id)
  }

  comments() {
    return this.mComments
  }

  assets() {
    return this.mAssets
  }

  costumes() {
    return this.mCostumes
  }

  sounds() {
    return this.mSounds
  }

  getCategoryBlocks(category: BlockCategory) {
    return this.mBlocks.filter(block => block.isCategoryBlock(category))
  }
}
