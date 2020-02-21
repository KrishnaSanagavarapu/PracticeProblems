import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPrintoutComponent } from './shipment-printout.component';

describe('ShipmentPrintoutComponent', () => {
  let component: ShipmentPrintoutComponent;
  let fixture: ComponentFixture<ShipmentPrintoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentPrintoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
