import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmCardHeaderComponent } from './ihm-card-header.component';

describe('IhmCardHeaderComponent', () => {
  let component: IhmCardHeaderComponent;
  let fixture: ComponentFixture<IhmCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhmCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhmCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
