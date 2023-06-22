import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newwo',
  templateUrl: './newwo.component.html',
  styleUrls: ['./newwo.component.scss'],
})
export class NewwoComponent  implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() bgimg!: string;

  constructor() { }

  ngOnInit() {}

}
