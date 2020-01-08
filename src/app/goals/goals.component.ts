import { Component, OnInit } from '@angular/core';
import { GoalService } from './goal.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  columnsToDisplay = ['title', 'category', 'progress'];
  goals: any;

  constructor(private goalService: GoalService, private snackBar: SnackbarService) { }

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
    this.snackBar.information(goal.title);
  }
}
