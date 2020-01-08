import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsComponent } from './goals.component';
import { ApplicationSettingsService } from '../shared/services/application-settings.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { GoalService } from './goal.service';
import { MaterialModule } from '../shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoalsComponent', () => {
  let component: GoalsComponent;
  let fixture: ComponentFixture<GoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [ GoalsComponent ],
      providers: [
        ApplicationSettingsService,
        SnackbarService,
        GoalService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
