import fs from 'fs'
import parser from 'xml2json'
import jsontoxml from 'jsontoxml'

describe('Test', () => {
  test('any', async () => {
    const promise = new Promise((resolve, reject) => {
      fs.readFile('src/public/xml/structureFile.xml', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(parser.toJson(data, { reversible: true })))
        }
      })
    })
    const response = await promise
    const xml = jsontoxml(response)
    console.log(xml)
    // await expect(response).rejects.toThrow()
  })
})
