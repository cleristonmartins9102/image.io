import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { UploadComponentModule } from 'src/app/upload-component/upload.module';
import { RepositoryImageApi } from 'src/app/infrastructure/repository/repository-image-api';

@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [ 
CommonModule,
    UploadComponentModule ],
  exports: [
    RequestComponent
  ],
  providers: [
  ],
})
export class RequestComponentModule {}