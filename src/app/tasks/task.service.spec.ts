import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { TaskHttpService } from '../shared/services/http/task-http.service';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TasksService', () => {
  let service: TaskService;
  let httpService: TaskHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApplicationSettingsService,
        TaskHttpService,
        TaskService
      ],
    });

    service = TestBed.get(TaskService);
    httpService = TestBed.get(TaskHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when executing the http service', () => {
    it('should successfully call all()', () => {
      spyOn(httpService, 'all');
      service.all();
      expect(httpService.all).toHaveBeenCalledTimes(1);
    });
    it('should successfully call get()', () => {
      spyOn(httpService, 'get');
      service.get(1);
      expect(httpService.get).toHaveBeenCalledTimes(1);
    });
  });
});
