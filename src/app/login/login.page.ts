import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  ptype:any= 'password';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
  }
  switchType()
  {
    if(this.ptype == 'password')
    {
      this.ptype = 'text';
    }

    else
    {
      this.ptype = 'password'
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
 
  onSubmit() {
      this.submitted = true;
 
      // reset alerts on submit
      this.alertService.clear();
 
      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }
 
      this.loading = true;
      this.accountService.login(this.f['email'].value, this.f['password'].value)
          .pipe(first())
          .subscribe({
              next: () => {
                    this.router.navigate(['../home'], { relativeTo: this.route });
                    this.loading = false;
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
  onRegister() {
    this.router.navigate(['register']);
  }

}
