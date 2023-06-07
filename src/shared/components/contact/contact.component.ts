import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  enlistForm = new FormGroup({
    name: new FormControl(''),
    nickname: new FormControl(''),
    steam: new FormControl(''),
    discord: new FormControl(''),
    pastHistory: new FormControl(''),
  });

  onSubmit() {
    console.log(this.enlistForm.value)
  }

}
