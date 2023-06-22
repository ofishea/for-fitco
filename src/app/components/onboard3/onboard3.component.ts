import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard3',
  templateUrl: './onboard3.component.html',
  styleUrls: ['./onboard3.component.scss'],
})
export class Onboard3Component  implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {}

  onResgister() {
    this.router.navigate(['register']);
  }
}
