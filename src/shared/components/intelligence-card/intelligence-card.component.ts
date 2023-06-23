import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-intelligence-card',
  templateUrl: './intelligence-card.component.html',
  styleUrls: ['./intelligence-card.component.scss'],
})
export class IntelligenceCardComponent {
  @Input() record: missionRecord = {title: '', text: ''};
  isFlipped: boolean = false;

  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('centcom-theme');
    console.log(this.record)
  }
  
  handleClick() {
    this.isFlipped = !this.isFlipped;
  }
}

type missionRecord = {
  title: string,
  text: string
}