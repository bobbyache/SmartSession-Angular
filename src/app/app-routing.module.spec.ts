import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
import { RecorderComponent } from './recorder/recorder.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { GoalsComponent } from './goals/goals.component';
import { DiaryComponent } from './diary/diary.component';
import { MaterialModule } from './shared/material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoreInfrastructureService } from './shared/core-infrastructure.service';
import { ApplicationSettingsService } from './shared/application-settings.service';
import { SnackbarService } from './shared/snackbar.service';
import { GoalService } from './goals/goal.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                MaterialModule,
                NoopAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [
                AppComponent,
                DashboardComponent,
                RoutinesComponent,
                RecorderComponent,
                ExercisesComponent,
                GoalsComponent,
                DiaryComponent,
                NavBarComponent,
                ToolBarComponent
            ],
            providers: [
                CoreInfrastructureService,
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
    it('navigate to "exercises" redirects you to /exercises', fakeAsync(() => {
        router.navigate(['exercises']);
        tick();
        expect(location.path()).toBe('/exercises');
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


    /*
  { path: 'dashboard', component: DashboardComponent },
  { path: 'routines', component: RoutinesComponent },
  { path: 'recorder', component: RecorderComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'diary', component: DiaryComponent }
    */
});
