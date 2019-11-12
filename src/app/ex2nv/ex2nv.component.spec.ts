import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2nvComponent } from './ex2nv.component';

describe('Ex2nvComponent', () => {
  let component: Ex2nvComponent;
  let fixture: ComponentFixture<Ex2nvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2nvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2nvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
