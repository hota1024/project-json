import { ProjectInterface } from '../Project'

/*
 * UseProject interface.
 */
export interface UseProjectInterface {
  /**
   * Project.
   */
  readonly project: ProjectInterface

  /**
   * Set project.
   *
   * @param project
   */
  setProject(project: ProjectInterface): void
}
