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
  readonly $employeeNumber = this._employeeNumber.asObservable();

  get employeeNumber$() {
    return this._employeeNumber.getValue();
  }

  set employeeNumber$(tabledata: EmployeeNumberz[]) {
    this._employeeNumber.next(tabledata);
  }

  constructor(private employeeService: EmployeeServices) {}

  getEmployeeData(): void {
    this.employeeService.getEmployees(950).subscribe(response => {
      this.employeeNumber$ = response;
    });
  }

  getEmployeeTableInfo(): Observable<EmployeeNumberz[]> {
    const tabledata = [];
    return this.$employeeNumber.pipe(
      map(employeek => {
        employeek.forEach(emp => {
          tabledata.push({
            id: emp.employeeId,
            first: emp.firstName,
            last: emp.lastName,
            stat: emp.employeeStatus,
            stor: emp.storeEmployee,
            sho: emp.shopEmployee,
            field: emp.fieldEmployee,
          });
        });
        return tabledata;
      })
    );
  }

  getEmployeesCount(): Observable<number> {
    return this.$employeeNumber.pipe(map(tabledata => tabledata.length));
  }
}
