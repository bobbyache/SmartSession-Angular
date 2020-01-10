import { TestBed } from '@angular/core/testing';

import { TaskHttpService } from './task-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ITask } from 'src/app/tasks/task.model';

describe('TaskHttpService', () => {
  let service: TaskHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });

    service = TestBed.get(TaskHttpService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all tasks', () => {
    service.all().subscribe(() => {});

    const req = httpTestingController.expectOne(`/tasks`);
    expect(req.request.method).toEqual('GET', 'Expected a GET request');
  });

  it('should get a single task', () => {
    service.get(1).subscribe(() => {});

    const req = httpTestingController.expectOne(`/tasks/1`, 'Expected one call to get a single task with the correct task id');
    expect(req.request.method).toEqual('GET', 'Expected a GET request');
  });

  it('should get a single task', () => {
    service.delete(1).subscribe(() => {});

    const req = httpTestingController.expectOne(`/tasks/1`, 'Expected one call to delete a single task');
    expect(req.request.method).toEqual('DELETE', 'Expected a DELETE request');
  });

  it('should update a single task', () => {
    const task: ITask = {
      id: 1,
      title: 'title',
      progress: 44,
      dateCreated: null
    };
    service.update(task).subscribe(() => {});

    const req = httpTestingController.expectOne(`/tasks/1`, 'Expected one call to delete a single task');
    expect(req.request.method).toEqual('PUT', 'Expected a PUT request');
    expect(req.request.body.title).toBe('title', 'Expected the request body to contain the correct task title');
  });
});
