import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TasksService } from '../tasks.service';
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
import { of } from 'rxjs';

describe('TaskComponent', () => {
  let tasksService: any; // in order to use the spy!
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {

    const tasksServiceSpy = jasmine.createSpyObj('TaskService', ['get']);

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
        { provide: TasksService, useValue: tasksServiceSpy }
      ],
    })
    .compileComponents()
    .then(() => {
      tasksService = TestBed.get(TasksService);
      tasksService.get.and.returnValue(of({ id: 1, title: 'title', dateCreated: null, progress: 33 }));

      fixture = TestBed.createComponent(TaskComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  describe('when created', () => {
    it('should create and populate the initially retrieved task', () => {
      expect(component).toBeTruthy();
      expect(component.task).toBeTruthy();
      expect(component.task.id).toBe(1, 'Unexpected task id value');
      expect(component.task.title).toBe('title', 'Unexpected task title value');
      expect(component.task.progress).toBe(33, 'Unexpected task progress value');
    });
  });
});
