import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { TaskHttpService } from '../shared/services/http/task-http.service';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TasksService', () => {
  let service: TaskService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when executing the http service', () => {
    it('should successfully call all()', () => {
      spyOn(service, 'all');
      service.all();
      expect(service.all).toHaveBeenCalledTimes(1);
    });
  });
});
