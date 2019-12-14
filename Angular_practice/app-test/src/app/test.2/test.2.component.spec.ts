import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test.2Component } from './test.2.component';

describe('Test.2Component', () => {
  let component: Test.2Component;
  let fixture: ComponentFixture<Test.2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test.2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
