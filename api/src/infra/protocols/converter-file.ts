import { XMLModel } from '../../application/model/xml-model'

export interface ConverterFile {
  getJson (): Promise<XMLModel>
  toXml (file: XMLModel): any
}
