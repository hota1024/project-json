import { TargetInterface } from '../Target'

/*
 * UseSprite interface.
 */
export interface UseTargetInterface {
  /**
   * Target.
   */
  readonly target: TargetInterface

  /**
   * Set target.
   *
   * @param target
   */
  setTarget(target: TargetInterface): void
}
