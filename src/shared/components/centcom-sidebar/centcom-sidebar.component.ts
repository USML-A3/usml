import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centcom-sidebar',
  templateUrl: './centcom-sidebar.component.html',
  styleUrls: ['./centcom-sidebar.component.scss'],
})
export class CentcomSidebarComponent {
  path: string = '';
  menuSelected: string = '';
  centcomLink = [{ name: 'Inteligencia', icon: 'search-outline' }];

  constructor(private router: Router) {}

  lastPath(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  ngOnInit() {
    this.path = this.router.url;
    this.menuSelected = this.lastPath(this.path);
  }
}
