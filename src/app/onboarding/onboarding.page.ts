import { Component, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
