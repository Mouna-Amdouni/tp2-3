import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4nvComponent } from './ex4nv.component';

describe('Ex4nvComponent', () => {
  let component: Ex4nvComponent;
  let fixture: ComponentFixture<Ex4nvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4nvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4nvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
