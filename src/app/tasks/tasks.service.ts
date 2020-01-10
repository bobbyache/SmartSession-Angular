import { Injectable } from '@angular/core';
import { TaskHttpService } from '../shared/services/http/task-http.service';
import { ITask } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpService: TaskHttpService) {
  }

  create(task: ITask) {
    console.log(task);
  }

  all(): Observable<ITask[]> {
    return this.httpService.all();
  }

  get(id: number): Observable<ITask> {
    return this.httpService.get(id);
  }

  delete(id: number): Observable<ITask> {
    return this.httpService.delete(id);
  }

  update(task: ITask): Observable<ITask> {
    return this.httpService.update(task);
  }
}
