import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProgressBarGraphComponent } from './item-progress-bar-graph.component';

describe('ItemProgressBarGraphComponent', () => {
  let component: ItemProgressBarGraphComponent;
  let fixture: ComponentFixture<ItemProgressBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProgressBarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProgressBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
