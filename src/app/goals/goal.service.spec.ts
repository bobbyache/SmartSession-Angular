import { TestBed } from '@angular/core/testing';

import { GoalService } from './goal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';

describe('GoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApplicationSettingsService,
        GoalService
      ],
    });
  });

  it('should be created', () => {
    const service: GoalService = TestBed.get(GoalService);
    expect(service).toBeTruthy();
  });
});
