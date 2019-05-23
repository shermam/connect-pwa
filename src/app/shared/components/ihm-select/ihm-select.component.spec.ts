import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmSelectComponent } from './ihm-select.component';

describe('IhmSelectComponent', () => {
  let component: IhmSelectComponent;
  let fixture: ComponentFixture<IhmSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhmSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
