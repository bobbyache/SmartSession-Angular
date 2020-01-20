import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditComponent } from './task-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskComponent } from '../task/task.component';
import { TasksComponent } from '../tasks.component';
import { routes } from 'src/app/app-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RoutinesComponent } from 'src/app/routines/routines.component';
import { RecorderComponent } from 'src/app/recorder/recorder.component';
import { GoalsComponent } from 'src/app/goals/goals.component';
import { DiaryComponent } from 'src/app/diary/diary.component';
import { TaskProgressHistoryComponent } from '../task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from '../task-progress-history-edit/task-progress-history-edit.component';
import { FormsModule } from '@angular/forms';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

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
        TaskEditComponent,
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
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
