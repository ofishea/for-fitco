import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories:any = 'beginner';

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
    
  }
  onWorkoutPlan() {
    this.router.navigate(['workout-plan']);
  }

  segmentChanged(ev: Event) {
    const customEvent = ev as CustomEvent;
    this.categories = customEvent.detail.value;
  }

}
