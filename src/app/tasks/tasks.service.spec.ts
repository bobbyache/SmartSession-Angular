import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks.service';
import { TaskHttpService } from '../shared/services/http/task-http.service';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ITask } from './task.model';
import { FormsModule } from '@angular/forms';

describe('TasksService', () => {
  let service: TasksService;
  let httpService: TaskHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        ApplicationSettingsService,
        TaskHttpService,
        TasksService
      ],
    });

    service = TestBed.inject(TasksService);
    httpService = TestBed.inject(TaskHttpService);
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
    it('should successfully call delete()', () => {
      spyOn(httpService, 'delete');
      service.delete(1);
      expect(httpService.delete).toHaveBeenCalledTimes(1);
      expect(httpService.delete).toHaveBeenCalledWith(1);
    });
    it('should successfully call update()', () => {
      const task: ITask = {
        id: 1,
        title: 'title',
        progress: 44,
        dateCreated: null
      };
      spyOn(httpService, 'update');
      service.update(task);
      expect(httpService.update).toHaveBeenCalledTimes(1);
      expect(httpService.update).toHaveBeenCalledWith(task);
    });
  });
});
