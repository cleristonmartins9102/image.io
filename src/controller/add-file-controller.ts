import { CreateFile } from '../domain/create-file'
import { FileModel } from '../domain/file-model'
import { ConverterFile } from '../infra/protocols/converter-file'
import { RepositoryAPI } from '../infra/protocols/repositoryAPI'
import { Controller } from './protocols/controller'

export class AddFileController implements Controller {
  constructor (
    private readonly converter: ConverterFile,
    private readonly createFile: CreateFile,
    private readonly repository: RepositoryAPI
  ) { }

  async handle (file: FileModel): Promise<any> {
    try {
      const jsonStructure = await this.converter.getJson()
      const json = await this.createFile.create(jsonStructure, file)
      const xml = this.converter.toXml(json)
      if (xml) {
        await this.repository.send(xml)
      }
      return null
    } catch (err) {
      return err
    }
  }
}
