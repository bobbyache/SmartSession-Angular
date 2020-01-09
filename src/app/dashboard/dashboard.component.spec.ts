import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { RoutinesComponent } from '../routines/routines.component';
import { RecorderComponent } from '../recorder/recorder.component';
import { GoalsComponent } from '../goals/goals.component';
import { DiaryComponent } from '../diary/diary.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskEditComponent } from '../tasks/task-edit/task-edit.component';
import { TaskProgressHistoryComponent } from '../tasks/task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from '../tasks/task-progress-history-edit/task-progress-history-edit.component';
import { TaskComponent } from '../tasks/task/task.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        DashboardComponent,
        RoutinesComponent,
        RecorderComponent,
        TasksComponent,
        TaskComponent,
        TaskEditComponent,
        TaskProgressHistoryComponent,
        TaskProgressHistoryEditComponent,
        GoalsComponent,
        DiaryComponent
      ],
      providers: [
        ApplicationSettingsService,
        SnackbarService
      ],
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router.navigateByUrl('/');
    advance();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when navigating', () => {
    it('should navigate to successfully to recorder', fakeAsync(() => {
      const menu = fixture.debugElement.queryAll(By.css('a[routerlink]'))[0];
      menu.triggerEventHandler('click', { button: 0 });
      advance();
      expect(location.path()).toEqual('/recorder');
    }));
    it('should navigate to successfully to routines', fakeAsync(() => {
      const menu = fixture.debugElement.queryAll(By.css('a[routerlink]'))[1];
      menu.triggerEventHandler('click', { button: 0 });
      advance();
      expect(location.path()).toEqual('/routines');
    }));
    it('should navigate to successfully to tasks', fakeAsync(() => {
      const menu = fixture.debugElement.queryAll(By.css('a[routerlink]'))[2];
      menu.triggerEventHandler('click', { button: 0 });
      advance();
      expect(location.path()).toEqual('/tasks');
    }));
    it('should navigate to successfully to diary', fakeAsync(() => {
      const menu = fixture.debugElement.queryAll(By.css('a[routerlink]'))[3];
      menu.triggerEventHandler('click', { button: 0 });
      advance();
      expect(location.path()).toEqual('/diary');
    }));
    it('should navigate to successfully to goals', fakeAsync(() => {
      const menu = fixture.debugElement.queryAll(By.css('a[routerlink]'))[4];
      menu.triggerEventHandler('click', { button: 0 });
      advance();
      expect(location.path()).toEqual('/goals');
    }));
  });

  function advance(): void {
    flush();
    fixture.detectChanges();
  }

});
