import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie22Component } from './partie22.component';

describe('Partie22Component', () => {
  let component: Partie22Component;
  let fixture: ComponentFixture<Partie22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
