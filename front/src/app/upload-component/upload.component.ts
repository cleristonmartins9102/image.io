import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'upload-comp',
  styleUrls: ['upload.scss'],
  templateUrl: 'upload.html'
})
export class UploadComponet {
  form: any
  @Output('sendForm') sendForm: EventEmitter<any> = new EventEmitter()
  constructor (
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      title: [null, Validators.required],
      summary: [null, Validators.required],
      address: [null, Validators.required]
    }
    )
  }

  ngOnInit(): void {
    this.sendForm.emit(this.form)
  }
}