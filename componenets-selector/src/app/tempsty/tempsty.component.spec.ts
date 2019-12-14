import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempstyComponent } from './tempsty.component';

describe('TempstyComponent', () => {
  let component: TempstyComponent;
  let fixture: ComponentFixture<TempstyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempstyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempstyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
