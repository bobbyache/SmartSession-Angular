import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutinesComponent } from './routines/routines.component';
import { GoalsComponent } from './goals/goals.component';
import { DiaryComponent } from './diary/diary.component';
import { RecorderComponent } from './recorder/recorder.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskProgressHistoryComponent } from './tasks/task-progress-history/task-progress-history.component';
import { TaskProgressHistoryEditComponent } from './tasks/task-progress-history-edit/task-progress-history-edit.component';
import { GoalComponent } from './goals/goal/goal.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'routines', component: RoutinesComponent },
  { path: 'recorder', component: RecorderComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id/history', component: TaskProgressHistoryComponent },
  { path: 'tasks/:id/history/edit', component: TaskProgressHistoryEditComponent },
  { path: 'tasks/:id/edit', component: TaskEditComponent },
  { path: 'tasks/:id', component: TaskComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'goals/:id', component: GoalComponent },
  { path: 'diary', component: DiaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
