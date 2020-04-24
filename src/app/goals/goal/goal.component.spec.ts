import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalComponent } from './goal.component';
import { ItemProgressBarGraphComponent } from 'src/app/shared/graphs/item-progress-bar-graph/item-progress-bar-graph.component';
import { TimeProgressAreaGraphComponent } from 'src/app/shared/graphs/time-progress-area-graph/time-progress-area-graph.component';

describe('GoalComponent', () => {
  let component: GoalComponent;
  let fixture: ComponentFixture<GoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoalComponent,
        ItemProgressBarGraphComponent,
        TimeProgressAreaGraphComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
