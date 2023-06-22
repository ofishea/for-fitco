import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { WorkoutPlanPage } from '../workout-plan/workout-plan.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'workout-plan',
    component: WorkoutPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
