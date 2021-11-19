import { Component } from '@angular/core';
import { RepositoryAPI } from 'src/app/domain/repositoryAPI';
import { RepositoryImageApi } from 'src/app/infrastructure/repository/repository-image-api';

@Component({
  selector: 'request-comp',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  private readonly pullUrl = 'https://hiringtestmcc.imagencloud.com:83/imcc/v1/import/record/'
  private readonly getUrl = 'https://hiringtestmcc.imagencloud.com:83/imcc/v1/record/mappings/'
  constructor (
    private repository: RepositoryImageApi
  ) {}

  currentUrl = {
    method: 'get',
    address: this.getUrl
  }
  form: any
  imagesApi = null
  changeUrl (method?: string) {
    if (method === 'get') {
      this.currentUrl.method = 'get'
      this.currentUrl.address = this.getUrl
      this.pull()
    } else {
      this.currentUrl.method = 'put'
      this.currentUrl.address = this.pullUrl
    }
  }

  receiveForm(event: any) {
    this.form = event
  }

  async send () {
   this.imagesApi = await this.repository.send(this.form.value)
  }

  async pull () {
    await this.repository.pull()
   }
}