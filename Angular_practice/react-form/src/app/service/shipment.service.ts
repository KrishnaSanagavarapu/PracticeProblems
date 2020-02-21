import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericShipmentReview } from '../modals/shipment';
import { Observable } from 'rxjs';
import { Endpoints } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private httpClient: HttpClient) { }

  submitGenericShipping(data): Observable<GenericShipmentReview> {
    return this.httpClient.post<GenericShipmentReview>(
      Endpoints.GENERIC_SHIPMENT(),
      data
    );
  }
}
