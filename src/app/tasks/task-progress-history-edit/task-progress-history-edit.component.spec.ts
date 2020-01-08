import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressHistoryEditComponent } from './task-progress-history-edit.component';

describe('TaskProgressHistoryEditComponent', () => {
  let component: TaskProgressHistoryEditComponent;
  let fixture: ComponentFixture<TaskProgressHistoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskProgressHistoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProgressHistoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
