import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  columnsToDisplay = ['title', 'progress'];
  tasks: ITask[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.all().subscribe(
      result => {
        this.tasks = result;
      },
      error => {
        console.log(error);
      }
    );
  }

}
