import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.page.html',
  styleUrls: ['./workout-plan.page.scss'],
})
export class WorkoutPlanPage implements OnInit {

  constructor(
    private NavCtrl: NavController,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }
  onBack() {
    this.NavCtrl.back();
  }

}
