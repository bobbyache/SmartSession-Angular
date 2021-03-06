import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
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
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskProgressHistoryComponent } from './tasks/task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from './tasks/task-progress-history-edit/task-progress-history-edit.component';
import { OkCancelDialogComponent } from './shared/dialogs/ok-cancel-dialog/ok-cancel-dialog.component';
import { FormsModule } from '@angular/forms';
import { GoalComponent } from './goals/goal/goal.component';
import { ItemProgressBarGraphComponent } from './shared/graphs/item-progress-bar-graph/item-progress-bar-graph.component';
import { TimeProgressAreaGraphComponent } from './shared/graphs/time-progress-area-graph/time-progress-area-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    OkCancelDialogComponent,
    DashboardComponent,
    RoutinesComponent,
    GoalsComponent,
    DiaryComponent,
    NavBarComponent,
    RecorderComponent,
    ToolBarComponent,
    TasksComponent,
    TaskComponent,
    TaskEditComponent,
    TaskProgressHistoryComponent,
    TaskProgressHistoryEditComponent,
    GoalComponent,
    ItemProgressBarGraphComponent,
    TimeProgressAreaGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    NgxChartsModule
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
