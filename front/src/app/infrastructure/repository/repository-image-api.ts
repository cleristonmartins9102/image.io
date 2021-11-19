import axios from 'axios'
import { Injectable } from '@angular/core';
import { RepositoryAPI } from 'src/app/domain/repositoryAPI';

@Injectable({
  providedIn: 'root'
})
export class RepositoryImageApi implements RepositoryAPI{
  async send (file: any): Promise<any> {
    return axios.post('http://127.0.0.1:5051/api/put', file).then(d => console.log(d)).catch((err) => console.log(err))
  }
  async pull (): Promise<any> {
    return axios.post('http://127.0.0.1:5051/api/pull')
  }}