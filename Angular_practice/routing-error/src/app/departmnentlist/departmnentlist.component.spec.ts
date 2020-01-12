import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmnentlistComponent } from './departmnentlist.component';

describe('DepartmnentlistComponent', () => {
  let component: DepartmnentlistComponent;
  let fixture: ComponentFixture<DepartmnentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmnentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmnentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
