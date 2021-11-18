import { CreateFile } from '../domain/create-file'
import { FileModel } from '../domain/file-model'
import { XMLModel } from './model/xml-model'

export class CreateFileXml implements CreateFile {
  async create (xmlStructure: XMLModel, file: FileModel): Promise<XMLModel> {
    xmlStructure.Records.Fields.Summary = file.summary
    xmlStructure.Records.Fields.Title = file.title
    xmlStructure.Records.MediaObject.MediaElement.OriginalFile = file.address
    return xmlStructure
  }
}
