import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatwhitePage } from './flatwhite.page';

describe('FlatwhitePage', () => {
  let component: FlatwhitePage;
  let fixture: ComponentFixture<FlatwhitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatwhitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatwhitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
