import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() hasTitle!: boolean;
  @Input() title!: string;
  @Input() src1!: string;
  @Input() src2!: string;
  constructor() {}

  ngOnInit() {}
}

