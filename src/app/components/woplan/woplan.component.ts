import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-woplan',
  templateUrl: './woplan.component.html',
  styleUrls: ['./woplan.component.scss'],
})
export class WoplanComponent implements OnInit {
  @Input() header!: string;
  @Input() subheader!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() bgimg!: string;
  constructor() {}

  ngOnInit() {}
}
