import { RepositoryAPI } from '../infra/protocols/repositoryAPI'
import { Controller } from './protocols/controller'

export class PullImageController implements Controller {
  constructor (
    private readonly repository: RepositoryAPI
  ) {}

  async handle (): Promise<any> {
    return await this.repository.pull()
  }
}
