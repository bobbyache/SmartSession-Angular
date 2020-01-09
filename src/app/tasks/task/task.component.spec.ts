import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TaskService } from '../task.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { ApplicationSettingsService } from 'src/app/shared/services/application-settings.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RoutinesComponent } from 'src/app/routines/routines.component';
import { RecorderComponent } from 'src/app/recorder/recorder.component';
import { GoalsComponent } from 'src/app/goals/goals.component';
import { DiaryComponent } from 'src/app/diary/diary.component';
import { TasksComponent } from '../tasks.component';
import { TaskProgressHistoryComponent } from '../task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from '../task-progress-history-edit/task-progress-history-edit.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        TaskComponent,
        TasksComponent,
        TaskEditComponent,
        TaskProgressHistoryComponent,
        TaskProgressHistoryEditComponent,
        DashboardComponent,
        RoutinesComponent,
        RecorderComponent,
        GoalsComponent,
        DiaryComponent
      ],
      providers: [
        ApplicationSettingsService,
        SnackbarService,
        TaskService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
