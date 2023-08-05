/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Kkc01P01Component } from './kkc01-p01.component';

describe('Kkc01P01Component', () => {
  let component: Kkc01P01Component;
  let fixture: ComponentFixture<Kkc01P01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kkc01P01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kkc01P01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
