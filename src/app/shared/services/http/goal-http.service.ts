import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGoal } from 'src/app/goals/goal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalHttpService {

  constructor(private http: HttpClient) { }

  all(): Observable<IGoal[]> {
    return this.http.get<IGoal[]>(`/goals`);
  }
}
