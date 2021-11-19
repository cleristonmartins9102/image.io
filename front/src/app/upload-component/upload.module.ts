import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponet } from './upload.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UploadComponet
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UploadComponet
  ],
  providers: [],
})
export class UploadComponentModule {}