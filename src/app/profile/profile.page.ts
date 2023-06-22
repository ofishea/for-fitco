import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services';
import { Account, Role } from '../_models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  Role = Role;
  account!: Account;

  constructor(
    private router: Router,
    private accountService: AccountService
    ) { }

  ngOnInit() {
    this.accountService.account.subscribe(x => this.account = x);
  }

  logout(): void {
    this.accountService.logout();
}

}
