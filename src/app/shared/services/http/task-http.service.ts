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
}
