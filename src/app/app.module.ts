import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { GoalsComponent } from './goals/goals.component';
import { DiaryComponent } from './diary/diary.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecorderComponent } from './recorder/recorder.component';
import { MaterialModule } from './shared/material.module';
import { GoalService } from './goals/goal.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationSettingsService } from './shared/services/application-settings.service';
import { SnackbarService } from './shared/services/snackbar/snackbar.service';
import { ApiRequestInterceptor } from './shared/interceptors/api-request.interceptor';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoutinesComponent,
    ExercisesComponent,
    GoalsComponent,
    DiaryComponent,
    NavBarComponent,
    RecorderComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiRequestInterceptor, multi: true },
    ApplicationSettingsService,
    SnackbarService,
    GoalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
