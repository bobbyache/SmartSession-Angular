import { Injectable } from '@angular/core';
import { IGoal } from './goal.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoalHttpService } from '../shared/services/http/goal-http.service';

@Injectable()
export class GoalService {

  constructor(private httpService: GoalHttpService) {
  }

  create(goal: IGoal) {
    console.log(goal);
  }

  all(): Observable<IGoal[]> {
    return this.httpService.all();
  }
}
