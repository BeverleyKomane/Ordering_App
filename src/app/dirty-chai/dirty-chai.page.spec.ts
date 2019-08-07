import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyChaiPage } from './dirty-chai.page';

describe('DirtyChaiPage', () => {
  let component: DirtyChaiPage;
  let fixture: ComponentFixture<DirtyChaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtyChaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyChaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
