/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoodComponent } from './Mood.component';

describe('MoodComponent', () => {
  let component: MoodComponent;
  let fixture: ComponentFixture<MoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
