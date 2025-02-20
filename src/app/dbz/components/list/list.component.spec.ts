/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListDbzComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListDbzComponent;
  let fixture: ComponentFixture<ListDbzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDbzComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
