import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlcompComponent } from './stlcomp.component';

describe('StlcompComponent', () => {
  let component: StlcompComponent;
  let fixture: ComponentFixture<StlcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
