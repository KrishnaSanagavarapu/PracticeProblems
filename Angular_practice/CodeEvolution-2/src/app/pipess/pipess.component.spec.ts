import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipessComponent } from './pipess.component';

describe('PipessComponent', () => {
  let component: PipessComponent;
  let fixture: ComponentFixture<PipessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
