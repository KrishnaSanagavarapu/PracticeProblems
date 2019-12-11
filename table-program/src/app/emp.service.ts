import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './emp.model';

@Injectable({
 providedIn: 'root'
})

export class EmployeeService {

  empUrl = 'https://srstest.jewels.com/EmployeeService/api/employees/?deptNo=950';

  constructor(private http: HttpClient) { }

  getEmp() {
    return this.http.get<Employee[]>(this.empUrl);
  }
}
