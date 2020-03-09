import { TestBed } from '@angular/core/testing';

import { GoalService } from './goal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { GoalHttpService } from '../shared/services/http/goal-http.service';

describe('GoalService', () => {
  let service: GoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApplicationSettingsService,
        GoalHttpService,
        GoalService
      ],
    });

    service = TestBed.get(GoalService);
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
