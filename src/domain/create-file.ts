import { XMLModel } from '../application/model/xml-model'
import { FileModel } from './file-model'

export interface CreateFile {
  create (xmlStructure: XMLModel, file: FileModel): Promise<XMLModel>
}
