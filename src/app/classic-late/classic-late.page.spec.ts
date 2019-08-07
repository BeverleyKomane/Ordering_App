import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLatePage } from './classic-late.page';

describe('ClassicLatePage', () => {
  let component: ClassicLatePage;
  let fixture: ComponentFixture<ClassicLatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicLatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
