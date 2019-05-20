import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonAddEditComponent } from './reason-add-edit.component';

describe('ReasonAddEditComponent', () => {
  let component: ReasonAddEditComponent;
  let fixture: ComponentFixture<ReasonAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
