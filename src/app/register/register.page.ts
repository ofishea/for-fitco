import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../_services';
import { MustMatch } from '../_helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private accountService: AccountService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        language: ['English'],
        plan: ['Free'],
        notification: [true],
        avatar: ['avatar'],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
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
      this.accountService.register(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                this.alertService.success('Your registration was successful, you can login now', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
                  this.loading = false;
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
  onLogin() {
    this.router.navigate(['login']);
  }

}
