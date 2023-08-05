/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryKkc01Component } from './query-kkc01.component';

describe('QueryKkc01Component', () => {
  let component: QueryKkc01Component;
  let fixture: ComponentFixture<QueryKkc01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryKkc01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryKkc01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
