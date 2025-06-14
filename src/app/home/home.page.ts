import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services';
import { Account, Role } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories:any = 'beginner';
  Role = Role;
  account!: Account;

  constructor(
    private router: Router,
    private accountService: AccountService
    ) {}

  ngOnInit() {
    this.accountService.account.subscribe(x => this.account = x);
    
  }
  onWorkoutPlan() {
    this.router.navigate(['workout-plan']);
  }

  segmentChanged(ev: Event) {
    const customEvent = ev as CustomEvent;
    this.categories = customEvent.detail.value;
  }

}
