import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  constructor(private http: HttpClient) { }

  all(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`/tasks`);
  }

  get(id: number): Observable<ITask> {
    return this.http.get<ITask>(`/tasks/${id}`);
  }

  delete(id: number): Observable<ITask> {
    return this.http.delete<ITask>(`/tasks/${id}`);
  }

  update(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`/tasks/${task.id}`, task);
  }
}
