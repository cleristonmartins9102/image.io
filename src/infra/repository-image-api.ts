import axios from 'axios'
import { RepositoryAPI } from './protocols/repositoryAPI'

export class RepositoryImageApi implements RepositoryAPI {
  config = {
    headers: {
      'X-Imagen-API-Key': 'AKKG0uTc3YbFr2AEAVp9',
      Authorization: 'Bearer mWMZQx3nipzip3jclQUfIMXhVC7wUQgnPViiJ9Sg',
      'Content-Type': 'application/xml'
    }
  }

  send (file: any): any {
    axios.put('https://developers.imagen.io/mcc/import/record_PUT/', file, this.config)
  }

  pull (): any {
    axios.get('https://developers.imagen.io/mcc/import/mappings_GET/', this.config)
  }
}
