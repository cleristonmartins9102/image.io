import { FileModel } from '../domain/file-model'
import { CreateFileXml } from './create-file-xml'
import { XMLModel } from './model/xml-model'

const fakeXmlStructure = (): XMLModel => ({
  Records: {
    Fields: {
      Title: '',
      Summary: ''
    },
    MediaObject: {
      MediaElement: {
        OriginalFile: ''
      }
    }
  }
})

describe('Create File', () => {
  test('Ensure ', async () => {
    const file: FileModel = {
      title: 'DBZ',
      summary: 'Dragon Ball Z',
      address: 'https://cleriston-images.s3.amazonaws.com/dbz.jpeg'
    }
    const fakeStructure = fakeXmlStructure()
    const compare = fakeXmlStructure()
    compare.Records.Fields.Summary = file.summary
    compare.Records.Fields.Title = file.title
    compare.Records.MediaObject.MediaElement.OriginalFile = file.address
    const sut = new CreateFileXml()
    const xml = await sut.create(fakeStructure, file)
    expect(xml).toEqual(compare)
  })
})
