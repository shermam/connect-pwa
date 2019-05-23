import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmTableComponent } from './ihm-table.component';

describe('IhmTableComponent', () => {
  let component: IhmTableComponent;
  let fixture: ComponentFixture<IhmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
