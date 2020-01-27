import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeServices } from '../service/employee.service';
import { EmployeeNumberz } from '../Modals/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeState {


  private readonly _employeeNumber = new BehaviorSubject<EmployeeNumberz[]>([]);
  readonly $_employeeNumber = this._employeeNumber.asObservable();

  get employeeNumber$() {
    return this._employeeNumber.getValue();
  }

  set employeeNumber$(data: EmployeeNumberz[]) {
    this._employeeNumber.next(data);
  }

  constructor(private employeeService: EmployeeServices) {}


}
