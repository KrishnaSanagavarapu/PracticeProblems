import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../endpoints';
import { EmployeeNumberz } from '../Modals/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServices {
  constructor(private httpClient: HttpClient) {}

  getEmployees(shopNo: number): Observable<EmployeeNumberz[]> {
    return this.httpClient.get<EmployeeNumberz[]>(Endpoints.GET_SHOP_EMPLOYEES(shopNo));
  }
}
