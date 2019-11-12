import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1novComponent } from './ex1nov.component';

describe('Ex1novComponent', () => {
  let component: Ex1novComponent;
  let fixture: ComponentFixture<Ex1novComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1novComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1novComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
