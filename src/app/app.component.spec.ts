import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
import { RecorderComponent } from './recorder/recorder.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { GoalsComponent } from './goals/goals.component';
import { DiaryComponent } from './diary/diary.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoreInfrastructureService } from './shared/core-infrastructure.service';
import { ApplicationSettingsService } from './shared/application-settings.service';
import { SnackbarService } from './shared/snackbar.service';
import { GoalService } from './goals/goal.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Guitar Smart Session'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Guitar Smart Session');
  });
});
