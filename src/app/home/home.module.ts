import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from '../components/header/header.component';
import { WoplanComponent } from '../components/woplan/woplan.component';
import { WocategoriesComponent } from '../components/wocategories/wocategories.component';
import { NewwoComponent } from '../components/newwo/newwo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    WoplanComponent,
    WocategoriesComponent,
    NewwoComponent
  ]
})
export class HomePageModule {}
