import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatlComponent } from './matl.component';

describe('MatlComponent', () => {
  let component: MatlComponent;
  let fixture: ComponentFixture<MatlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
