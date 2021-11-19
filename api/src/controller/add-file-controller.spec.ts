import { XMLModel } from '../application/model/xml-model'
import { CreateFile } from '../domain/create-file'
import { FileModel } from '../domain/file-model'
import { ConverterFile } from '../infra/protocols/converter-file'
import { RepositoryAPI } from '../infra/protocols/repositoryAPI'
import { RepositoryImageApi } from '../infra/repository-image-api'
import { AddFileController } from './add-file-controller'

class ConverterXML implements ConverterFile {
  getJson (): any {}
  toXml (file: XMLModel): any {}
}

class CreateFileXml implements CreateFile {
  async create (xmlStructure: XMLModel, file: FileModel): Promise<XMLModel> {
    return xmlStructure
  }
}

class RepositoryImageAPI implements RepositoryAPI {
  send (file: any): any {}
  pull (): any {}
}

const file: FileModel = {
  title: 'DBZ',
  summary: 'Dragon Ball Z',
  address: 'https://cleriston-images.s3.amazonaws.com/dbz.jpeg'
}

describe('Controller', () => {
  test('Ensure calls Converter getJson', async () => {
    const converter = new ConverterXML()
    const createFile = new CreateFileXml()
    const repository = new RepositoryImageAPI()
    const sut = new AddFileController(converter, createFile, repository)
    const getJsonSpy = jest.spyOn(converter, 'getJson')
    await sut.handle(file)
    expect(getJsonSpy).toBeCalled()
  })

  test('Ensure calls CreateFile', async () => {
    const converter = new ConverterXML()
    const createFile = new CreateFileXml()
    const repository = new RepositoryImageAPI()
    const sut = new AddFileController(converter, createFile, repository)
    const createFileSpy = jest.spyOn(createFile, 'create')
    await sut.handle(file)
    expect(createFileSpy).toBeCalled()
  })

  test('Ensure calls Converter toXML', async () => {
    const converter = new ConverterXML()
    const createFile = new CreateFileXml()
    const repository = new RepositoryImageAPI()
    const sut = new AddFileController(converter, createFile, repository)
    const toXmlSpy = jest.spyOn(converter, 'toXml')
    await sut.handle(file)
    expect(toXmlSpy).toBeCalled()
  })

  test('Ensure calls Repository', async () => {
    const converter = new ConverterXML()
    const createFile = new CreateFileXml()
    const repository = new RepositoryImageAPI()
    const sut = new AddFileController(converter, createFile, repository)
    jest.spyOn(converter, 'toXml').mockReturnValueOnce('any_xml')
    const repositorySpy = jest.spyOn(repository, 'send')
    await sut.handle(file)
    expect(repositorySpy).toBeCalled()
  })
})
