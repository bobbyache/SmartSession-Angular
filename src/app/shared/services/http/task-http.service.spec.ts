import { TestBed } from '@angular/core/testing';

import { TaskHttpService } from './task-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
});
