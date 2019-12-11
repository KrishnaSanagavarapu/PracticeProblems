import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './emp.model';
import { NewEmployee } from './emp2.model';

@Injectable({
 providedIn: 'root'
})

export class EmployeeService {

  empUrl = 'https://srstest.jewels.com/EmployeeService/api/employees/?deptNo=950';

  newEmpUrl = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmp() {
    return this.http.get<Employee[]>(this.empUrl);
  }

  getNewEmp()  {
    return this.http.get<NewEmployee[]>(this.newEmpUrl);
  }
}
