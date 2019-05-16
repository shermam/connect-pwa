import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddEditComponent } from './manager-add-edit.component';

describe('ManagerAddEditComponent', () => {
  let component: ManagerAddEditComponent;
  let fixture: ComponentFixture<ManagerAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
