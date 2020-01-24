import { TargetInterface } from '../Target'
import { VideoState } from '../../types/VideoState'

/*
 * Stage interface.
 */
export interface StageInterface extends TargetInterface {
  /**
   * Tempo
   */
  tempo: number

  /**
   * Video transparency.
   */
  videoTransparency: number

  /**
   * Video state.
   */
  videoState: VideoState

  /**
   * Text to speech language.
   */
  textToSpeechLanguage: string
}
