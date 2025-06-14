import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';
import { Onboard1Component } from '../components/onboard1/onboard1.component';
import { Onboard2Component } from '../components/onboard2/onboard2.component';
import { Onboard3Component } from '../components/onboard3/onboard3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPageRoutingModule
  ],
  declarations: [
    OnboardingPage,
    Onboard1Component,
    Onboard2Component,
    Onboard3Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OnboardingPageModule {}
