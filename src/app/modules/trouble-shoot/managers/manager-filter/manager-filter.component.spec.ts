import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFilterComponent } from './manager-filter.component';

describe('ManagerFilterComponent', () => {
  let component: ManagerFilterComponent;
  let fixture: ComponentFixture<ManagerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
