import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  constructor(private dialogService: NbDialogService) {}

  open() {
    this.dialogService.open(ModalFormComponent);
  }
}
