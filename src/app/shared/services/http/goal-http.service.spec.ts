import { TestBed } from '@angular/core/testing';

import { GoalHttpService } from './goal-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('GoalHttpService', () => {
  let service: GoalHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });

    service = TestBed.get(GoalHttpService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all goals', () => {
    service.all().subscribe(() => {});

    const req = httpTestingController.expectOne(`/goals`);
    expect(req.request.method).toEqual('GET', 'Expected a GET request');
  });
});
