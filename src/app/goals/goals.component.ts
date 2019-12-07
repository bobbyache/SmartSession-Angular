import { Component, OnInit } from '@angular/core';
import { GoalService } from './goal.service';
import { CoreInfrastructureService } from 'src/app/shared/core-infrastructure.service';

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  columnsToDisplay = ['title', 'category', 'progress'];
  goals: any;

  constructor(private goalService: GoalService, private core: CoreInfrastructureService) { }

  ngOnInit(): void {
    this.goalService.all().subscribe(
      (result) => {
        this.goals = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  notify(goal) {
    this.core.informationSnackbar(goal.title);
  }
}
