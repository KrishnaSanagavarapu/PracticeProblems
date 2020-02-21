import { Injectable } from '@angular/core';
import { ShipmentService } from '../service/shipment.service';
import { Observable } from 'rxjs';
import { GenericShipmentReview } from '../modals/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentState {
  constructor(private shipmentService: ShipmentService) {}

  submitGenericShipping(data): Observable<GenericShipmentReview> {
    return this.shipmentService.submitGenericShipping(data);
  }

}
