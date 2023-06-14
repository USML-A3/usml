import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent {
  @Input() imgName: string = '';
  @Input() title: string = '';
  @Input() spanText: string = '';
  isFlipped: boolean = false;

  handleClick() {
    this.isFlipped = !this.isFlipped;
  }
}
