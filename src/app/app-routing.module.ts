import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
import { GoalsComponent } from './goals/goals.component';
import { DiaryComponent } from './diary/diary.component';
import { RecorderComponent } from './recorder/recorder.component';
import { TasksComponent } from './tasks/tasks.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'routines', component: RoutinesComponent },
  { path: 'recorder', component: RecorderComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'diary', component: DiaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
