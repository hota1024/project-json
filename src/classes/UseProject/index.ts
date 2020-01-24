import { UseProjectInterface } from '../../interfaces/UseProject'
import { ProjectInterface } from '../../interfaces/Project'

/*
 * UseProject class.
 */
export class UseProject implements UseProjectInterface {
  /**
   * Project.
   */
  private mProject!: ProjectInterface

  /**
   * Project.
   */
  get project() {
    return this.mProject
  }

  /**
   *
   * @param project Constructor.
   */
  constructor(project?: ProjectInterface) {
    if (project) {
      this.setProject(project)
    }
  }

  /**
   * Set project.
   *
   * @param project
   */
  setProject(project: ProjectInterface) {
    this.mProject = project
  }
}
