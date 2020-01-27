import { Component, OnInit } from '@angular/core';
import { Employee } from './emp.model';
import { EmployeeService } from './emp.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Table Example';
  employee$: Employee[];
  employeeDataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['firstName', 'employeeId', 'lastName', 'fieldEmployee'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    return this.employeeService.getEmp().subscribe(data => this.employee$ = data);
    console.log(this.employee$);
  }
}
