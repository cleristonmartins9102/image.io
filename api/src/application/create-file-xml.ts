import { CreateFile } from '../domain/create-file'
import { FileModel } from '../domain/file-model'
import { XMLModel } from './model/xml-model'

export class CreateFileXml implements CreateFile {
  async create (xmlStructure: XMLModel, file: FileModel): Promise<XMLModel> {
    xmlStructure.Records.ImagenRecord.Fields.Summary = file.summary
    xmlStructure.Records.ImagenRecord.Fields.Title = file.title
    xmlStructure.Records.ImagenRecord.MediaObject.MediaElement.OriginalFile = file.address
    return xmlStructure
  }
}
