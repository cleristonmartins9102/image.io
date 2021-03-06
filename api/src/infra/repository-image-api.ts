import axios from 'axios'
import { RepositoryAPI } from './protocols/repositoryAPI'

export class RepositoryImageApi implements RepositoryAPI {
  config = {
    headers: {
      'X-Imagen-API-Key': 'AKKG0uTc3YbFr2AEAVp9',
      Authorization: 'Bearer ',
      'Content-Type': 'application/xml'
    }
  }

  async send (file: any): Promise<any> {
    return await axios.put(`https://hiringtestmcc.imagencloud.com:83/imcc/v1/import/record/${file.name}`, file, this.config)
  }

  async pull (): Promise<any> {
    return await axios.get('https://hiringtestmcc.imagencloud.com:83/imcc/v1/record/mappings/', this.config)
  }
}
