import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeCreamPage } from './caffe-cream.page';

describe('CaffeCreamPage', () => {
  let component: CaffeCreamPage;
  let fixture: ComponentFixture<CaffeCreamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaffeCreamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaffeCreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
