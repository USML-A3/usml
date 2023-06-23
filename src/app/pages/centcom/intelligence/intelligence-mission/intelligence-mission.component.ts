import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-intelligence-mission',
  templateUrl: './intelligence-mission.component.html',
  styleUrls: ['./intelligence-mission.component.scss'],
})
export class IntelligenceMissionComponent {
  text: string = '';
  title: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.text = params['text']
      this.title = params['title']
    })
  }
}
