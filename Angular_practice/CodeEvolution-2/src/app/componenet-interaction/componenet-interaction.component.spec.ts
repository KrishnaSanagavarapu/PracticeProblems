import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetInteractionComponent } from './componenet-interaction.component';

describe('ComponenetInteractionComponent', () => {
  let component: ComponenetInteractionComponent;
  let fixture: ComponentFixture<ComponenetInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenetInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenetInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
