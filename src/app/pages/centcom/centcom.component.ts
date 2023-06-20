import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-centcom',
  templateUrl: './centcom.component.html',
  styleUrls: ['./centcom.component.scss']
})
export class CentcomComponent {


  constructor(private sidebarService: NbSidebarService) {
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }

}
