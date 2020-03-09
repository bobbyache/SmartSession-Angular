import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
import { RecorderComponent } from './recorder/recorder.component';
import { GoalsComponent } from './goals/goals.component';
import { DiaryComponent } from './diary/diary.component';
import { MaterialModule } from './shared/material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApplicationSettingsService } from './shared/services/application-settings.service';
import { SnackbarService } from './shared/services/snackbar/snackbar.service';
import { GoalService } from './goals/goal.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskProgressHistoryComponent } from './tasks/task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from './tasks/task-progress-history-edit/task-progress-history-edit.component';
import { FormsModule } from '@angular/forms';

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                MaterialModule,
                FormsModule,
                NoopAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [
                AppComponent,
                DashboardComponent,
                RoutinesComponent,
                RecorderComponent,
                TaskComponent,
                TaskEditComponent,
                TaskProgressHistoryComponent,
                TaskProgressHistoryEditComponent,
                TasksComponent,
                GoalsComponent,
                DiaryComponent,
                NavBarComponent,
                ToolBarComponent
            ],
            providers: [
                ApplicationSettingsService,
                SnackbarService,
                GoalService
            ],
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);

        router.initialNavigation();
    });

    it('navigate to "" redirects you to /', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/');
    }));
    it('navigate to "dashboard" redirects you to /dashboard', fakeAsync(() => {
        router.navigate(['dashboard']);
        tick();
        expect(location.path()).toBe('/dashboard');
    }));
    it('navigate to "routines" redirects you to /routines', fakeAsync(() => {
        router.navigate(['routines']);
        tick();
        expect(location.path()).toBe('/routines');
    }));
    it('navigate to "recorder" redirects you to /recorder', fakeAsync(() => {
        router.navigate(['recorder']);
        tick();
        expect(location.path()).toBe('/recorder');
    }));

    it('navigate to "tasks" redirects you to /tasks', fakeAsync(() => {
        router.navigate(['tasks']);
        tick();
        expect(location.path()).toBe('/tasks');
    }));

    it('navigate to a specific task directs you to /tasks/[id]', fakeAsync(() => {
        router.navigate(['tasks/1']);
        tick();
        expect(location.path()).toBe('/tasks/1');
    }));
    it('navigate to a specific task for edit directs you to /tasks/[id]/edit', fakeAsync(() => {
        router.navigate(['tasks/1/edit']);
        tick();
        expect(location.path()).toBe('/tasks/1/edit');
    }));
    it('navigate to a specific task history directs you to /tasks/[id]/history', fakeAsync(() => {
        router.navigate(['tasks/1/history']);
        tick();
        expect(location.path()).toBe('/tasks/1/history');
    }));
    it('navigate to a specific task history directs you to /tasks/[id]/history/edit', fakeAsync(() => {
        router.navigate(['tasks/1/history/edit']);
        tick();
        expect(location.path()).toBe('/tasks/1/history/edit');
    }));

    it('navigate to "goals" redirects you to /goals', fakeAsync(() => {
        router.navigate(['goals']);
        tick();
        expect(location.path()).toBe('/goals');
    }));
    it('navigate to "diary" redirects you to /diary', fakeAsync(() => {
        router.navigate(['diary']);
        tick();
        expect(location.path()).toBe('/diary');
    }));
});
