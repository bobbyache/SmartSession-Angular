import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RoutinesComponent } from '../routines/routines.component';
import { RecorderComponent } from '../recorder/recorder.component';
import { TaskProgressHistoryComponent } from './task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from './task-progress-history-edit/task-progress-history-edit.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskComponent } from './task/task.component';
import { GoalsComponent } from '../goals/goals.component';
import { DiaryComponent } from '../diary/diary.component';
import { FormsModule } from '@angular/forms';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

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
        TaskComponent,
        TasksComponent,
        DashboardComponent,
        DiaryComponent,
        RoutinesComponent,
        RecorderComponent,
        GoalsComponent,
        TaskEditComponent,
        TaskProgressHistoryComponent,
        TaskProgressHistoryEditComponent
      ],
      providers: [
        ApplicationSettingsService,
        SnackbarService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
