import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutPlanPage } from './workout-plan.page';

describe('WorkoutPlanPage', () => {
  let component: WorkoutPlanPage;
  let fixture: ComponentFixture<WorkoutPlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkoutPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
