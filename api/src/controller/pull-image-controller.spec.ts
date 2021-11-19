import { FileModel } from '../domain/file-model'
import { RepositoryAPI } from '../infra/protocols/repositoryAPI'
import { PullImageController } from './pull-image-controller'

class RepositoryImageAPI implements RepositoryAPI {
  send (file: any): any {}
  pull (): any {}
}

describe('PullImages', () => {
  test('Ensure calls Repository pull method', async () => {
    const repository = new RepositoryImageAPI()
    const sut = new PullImageController(repository)
    const repoSpy = jest.spyOn(repository, 'pull')
    await sut.handle()
    expect(repoSpy).toBeCalled()
  })
})
