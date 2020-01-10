import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask } from '../task.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from '../tasks.service';
import { ApplicationSettingsService } from 'src/app/shared/services/application-settings.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* *************************************************************************************************
ngUnsubscribe Pattern
https://www.intertech.com/Blog/angular-best-practice-unsubscribing-rxjs-observables/
************************************************************************************************* */
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<any> = new Subject<any>();
  public task: ITask;

  constructor(private service: TasksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadTask(this.route.snapshot.params[ApplicationSettingsService.ID_TOKEN]);

    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: Params) => {
        this.loadTask(params[ApplicationSettingsService.ID_TOKEN]);
    });
  }

  private loadTask(id): void {
    this.service.get(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        this.task = result;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
