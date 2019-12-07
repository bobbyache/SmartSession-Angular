import { Injectable } from '@angular/core';
import { IGoal } from './goal.model';
import { HttpClient } from '@angular/common/http';
import { CoreInfrastructureService } from '../shared/core-infrastructure.service';
import { Observable } from 'rxjs';

@Injectable()
export class GoalService {

  constructor(private http: HttpClient, private core: CoreInfrastructureService) {
  }

  create(goal: IGoal) {
    console.log(goal);
  }

  all(): Observable<IGoal[]> {
    return this.http.get<IGoal[]>(`/goals`);
  }
}
