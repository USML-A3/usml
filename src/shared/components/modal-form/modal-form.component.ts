import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {
  enlistForm = new FormGroup({
    name: new FormControl(''),
    nickname: new FormControl(''),
    steam: new FormControl(''),
    discord: new FormControl(''),
    pastHistory: new FormControl(''),
  });

  onSubmit() {
    console.log(this.enlistForm.value);
  }
}
