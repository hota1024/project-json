import { UseTargetInterface } from '../../interfaces/UseTarget'
import { TargetInterface } from '../../interfaces/Target'

/*
 * UseSprite class.
 */
export class UseTarget implements UseTargetInterface {
  /**
   * Target.
   */
  private mTarget!: TargetInterface

  /**
   * Target.
   */
  get target() {
    return this.mTarget
  }

  /**
   * Constructor.
   *
   * @param target
   */
  constructor(target?: TargetInterface) {
    if (target) {
      this.setTarget(target)
    }
  }

  /**
   * Set target.
   *
   * @param target
   */
  setTarget(target: TargetInterface) {
    this.mTarget = target
  }
}
