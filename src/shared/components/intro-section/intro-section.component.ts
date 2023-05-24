import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent{

  isOpen = false;
  handleClick = () => {
    this.isOpen = !this.isOpen 
  }

}
