/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinAngularComponent } from './pin-angular.component';

describe('PinAngularComponent', () => {
  let component: PinAngularComponent;
  let fixture: ComponentFixture<PinAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
