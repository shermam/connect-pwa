import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmCardActionsComponent } from './ihm-card-actions.component';

describe('IhmCardActionsComponent', () => {
  let component: IhmCardActionsComponent;
  let fixture: ComponentFixture<IhmCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhmCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhmCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
