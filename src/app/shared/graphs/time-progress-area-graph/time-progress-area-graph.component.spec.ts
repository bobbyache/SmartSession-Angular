import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeProgressAreaGraphComponent } from './time-progress-area-graph.component';

describe('TimeProgressAreaGraphComponent', () => {
  let component: TimeProgressAreaGraphComponent;
  let fixture: ComponentFixture<TimeProgressAreaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeProgressAreaGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeProgressAreaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
