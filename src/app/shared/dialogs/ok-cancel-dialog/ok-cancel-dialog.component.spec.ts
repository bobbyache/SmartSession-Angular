import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkCancelDialogComponent } from './ok-cancel-dialog.component';
import { MaterialModule } from '../../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('OkCancelDialogComponent', () => {
  let component: OkCancelDialogComponent;
  let fixture: ComponentFixture<OkCancelDialogComponent>;

  const MOCK_MAT_DIALOG_DATA = { /* can create your own mock data here */ };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: MOCK_MAT_DIALOG_DATA }
      ],
      declarations: [ OkCancelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
