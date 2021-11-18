import fs from 'fs'
import parser from 'xml2json'
import jsontoxml from 'jsontoxml'
import { XMLModel } from '../application/model/xml-model'
import { ConverterFile } from './protocols/converter-file'

export class ConverterXML implements ConverterFile {
  async getJson (): Promise<XMLModel> {
    return new Promise((resolve, reject) => {
      fs.readFile('src/public/xml/structureFile.xml', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(parser.toJson(data, { reversible: true })))
        }
      })
    })
  }

  toXml (file: XMLModel): any {
    return jsontoxml(
      {
        Records: [
          {
            name: 'Fields', children: { Title: file.Records.Fields.Title, Summary: file.Records.Fields.Summary }
          },
          {
            name: 'MediaObject',
            attrs: { Version: 3, ID: -1, MediaType: 'image' },
            children: [
              {
                name: 'MediaElement',
                attrs: { MediaType: 'image' },
                children: {
                  OriginalFile: file.Records.MediaObject.MediaElement.OriginalFile
                }
              }
            ]
          }
        ]
      }
    )
  }
}
