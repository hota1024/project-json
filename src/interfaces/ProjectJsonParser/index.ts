import { ProjectJson } from '../../types/ProjectJson'
import { ProjectInterface } from '../Project'

/*
 * ProjectJsonParser interface.
 */
export interface ProjectJsonParserInterface {
  /**
   * Parse.
   *
   * @param json
   */
  parse(json: ProjectJson): ProjectInterface
}
