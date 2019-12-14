import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultinComponent } from './multin.component';

describe('MultinComponent', () => {
  let component: MultinComponent;
  let fixture: ComponentFixture<MultinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
