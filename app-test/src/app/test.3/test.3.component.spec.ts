import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test.3Component } from './test.3.component';

describe('Test.3Component', () => {
  let component: Test.3Component;
  let fixture: ComponentFixture<Test.3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test.3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
