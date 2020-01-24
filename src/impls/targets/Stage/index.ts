import { SpriteInterface } from '../../../interfaces/Sprite'
import { Target } from '../../../abstracts/Target'
import { StageInterface } from '../../../interfaces/Stage'
import { ProjectInterface } from '../../../interfaces/Project'
import { VariableInterface } from '../../../interfaces/Variable'
import { BlockInterface } from '../../../interfaces/Block'
import { ListInterface } from '../../../interfaces/List'
import { BroadcastInterface } from '../../../interfaces/Broadcast'
import { CommentInterface } from '../../../interfaces/Comment'
import { CostumeInterface } from '../../../interfaces/Costume'
import { SoundInterface } from '../../../interfaces/Sound'
import { VideoState } from '../../../types/VideoState'

/*
 * Stage class.
 */
export class Stage extends Target implements StageInterface {
  /**
   * Tempo
   */
  tempo!: number

  /**
   * Video transparency.
   */
  videoTransparency!: number

  /**
   * Video state.
   */
  videoState!: VideoState

  /**
   * Text to speech language.
   */
  textToSpeechLanguage!: string

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
    tempo: number
    videoTransparency: number
    videoState: VideoState
    textToSpeechLanguage: string
  }) {
    super(data)
    this.tempo = data.tempo
    this.videoTransparency = data.videoTransparency
    this.videoState = data.videoState
    this.textToSpeechLanguage = data.textToSpeechLanguage
  }

  /**
   * Is sprite.
   */
  isSprite(): this is SpriteInterface {
    return false
  }

  /**
   * Is stage.
   */
  isStage(): this is StageInterface {
    return true
  }
}
