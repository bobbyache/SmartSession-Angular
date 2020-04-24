import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from '../app-routing.module';

import { GoalsComponent } from './goals.component';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { GoalService } from './goal.service';
import { MaterialModule } from '../shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemProgressBarGraphComponent } from '../shared/graphs/item-progress-bar-graph/item-progress-bar-graph.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RoutinesComponent } from '../routines/routines.component';
import { RecorderComponent } from '../recorder/recorder.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskProgressHistoryComponent } from '../tasks/task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from '../tasks/task-progress-history-edit/task-progress-history-edit.component';
import { TaskEditComponent } from '../tasks/task-edit/task-edit.component';
import { TaskComponent } from '../tasks/task/task.component';
import { GoalComponent } from './goal/goal.component';
import { DiaryComponent } from '../diary/diary.component';
import { FormsModule } from '@angular/forms';
import { TimeProgressAreaGraphComponent } from '../shared/graphs/time-progress-area-graph/time-progress-area-graph.component';

describe('GoalsComponent', () => {
  let component: GoalsComponent;
  let fixture: ComponentFixture<GoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        FormsModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        DashboardComponent,
        GoalsComponent,
        GoalComponent,
        ItemProgressBarGraphComponent,
        TimeProgressAreaGraphComponent,
        RoutinesComponent,
        RecorderComponent,
        TasksComponent,
        TaskProgressHistoryComponent,
        TaskProgressHistoryEditComponent,
        TaskEditComponent,
        TaskComponent,
        DiaryComponent
      ],
      providers: [
        ApplicationSettingsService,
        SnackbarService,
        GoalService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
