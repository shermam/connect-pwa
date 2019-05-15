import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddEditComponent } from './event-add-edit.component';

describe('EventAddEditComponent', () => {
  let component: EventAddEditComponent;
  let fixture: ComponentFixture<EventAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
