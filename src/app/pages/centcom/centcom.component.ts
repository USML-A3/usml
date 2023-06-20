import { Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-centcom',
  templateUrl: './centcom.component.html',
  styleUrls: ['./centcom.component.scss'],
})
export class CentcomComponent {
  constructor(
    private sidebarService: NbSidebarService,
    private themeService: NbThemeService
  ) {
    this.themeService.changeTheme('centcom-theme');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }
}
