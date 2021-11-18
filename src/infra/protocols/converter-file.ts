import { XMLModel } from '../../application/model/xml-model'
import { FileModel } from '../../domain/file-model'

export interface ConverterFile {
  getJson (): Promise<XMLModel>
  toXml (file: XMLModel): any
}
