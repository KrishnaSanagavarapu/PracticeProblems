import { Component, OnInit } from '@angular/core';
import { Employee } from './emp.model';
import { EmployeeService } from './emp.service';
import { NewEmployee } from './emp2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Table Example';
  employee$: Employee[];
  newemployee$: NewEmployee[];
  displayedColumns: string[] = 
  ['id', 'employee_name', 'employee_salary', 'id'];
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeTable();
    this.getNewEmployeeTable();    
  }

  getEmployeeTable() {
  return this.employeeService.getEmp().subscribe(data => this.employee$ = data);
  }

  getNewEmployeeTable() {
    return this.employeeService.getNewEmp().subscribe(newdata => this.newemployee$ = newdata);
  }
}
