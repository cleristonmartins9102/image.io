import { XMLModel } from '../application/model/xml-model'
import { FileModel } from '../domain/file-model'
import { ConverterXML } from './converter-xml'

const file: FileModel = {
  title: 'DBZ',
  summary: 'Dragon Ball Z',
  address: 'https://cleriston-images.s3.amazonaws.com/dbz.jpeg'
}

const fileChanged: XMLModel = {
  Records: {
    ImagenRecord: {
      Fields: {
        Title: 'any_title',
        Summary: 'any_summary'
      },
      MediaObject: {
        MediaElement: {
          OriginalFile: 'http://any_address'
        }
      }
    }
  }
}

describe('ConverterXML', () => {
  test('Ensure getJson is ok', async () => {
    const sut = new ConverterXML()
    const json = await sut.getJson()
    expect(json).toBeTruthy()
  })

  test('Ensure toXml is ok', () => {
    const sut = new ConverterXML()
    const xml = sut.toXml(fileChanged)
    expect(xml).toBeTruthy()
  })
})
