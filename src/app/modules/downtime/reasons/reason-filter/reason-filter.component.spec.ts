import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonFilterComponent } from './reason-filter.component';

describe('ReasonFilterComponent', () => {
  let component: ReasonFilterComponent;
  let fixture: ComponentFixture<ReasonFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
