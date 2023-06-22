import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wocategories',
  templateUrl: './wocategories.component.html',
  styleUrls: ['./wocategories.component.scss'],
})
export class WocategoriesComponent  implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() bgimg!: string;

  categories:any = 'beginner';
  constructor() { }

  ngOnInit() {}

}
