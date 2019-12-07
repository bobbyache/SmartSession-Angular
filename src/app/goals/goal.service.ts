import { Injectable } from '@angular/core';
import { IGoal } from './goal.model';
import { HttpClient } from '@angular/common/http';
import { CoreInfrastructureService } from '../shared/core-infrastructure.service';

@Injectable()
export class GoalService {

  constructor(private http: HttpClient, private core: CoreInfrastructureService) {
  }

  create(goal: IGoal) {
    console.log(goal);
  }

  all() {
    const baseUrl = this.core.baseUrl();
    const headers = this.core.httpHeaders();

    return this.http.get(`${baseUrl}/goals`, { headers });
  }
}
