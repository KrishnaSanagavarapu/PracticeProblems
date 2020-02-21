import { Component, OnInit, Input } from '@angular/core';
import { GenericShipment } from '../modals/shipment';

@Component({
  selector: 'app-shipment-printout',
  templateUrl: './shipment-printout.component.html',
  styleUrls: ['./shipment-printout.component.scss']
})
export class ShipmentPrintoutComponent implements OnInit {
  @Input('shipData') genericShipmentData : GenericShipment;

  constructor() { }

  ngOnInit() {
  }

}
