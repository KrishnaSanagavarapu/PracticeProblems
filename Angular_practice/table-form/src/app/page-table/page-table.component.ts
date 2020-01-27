import { Component, OnInit } from '@angular/core';
import { EmployeeState } from '../state/employee.state';
import { EmployeeNumberz } from '../Modals/employee';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  subscriptions: Subscription[] = [];
  employeeDataSource: EmployeeNumberz[] = [];
  employeeColumnData = [
    'employeeId',
    'firstName',
    'lastName',
    'employeeStatus'
  ];
  empCount: number;

  constructor(private employeeState: EmployeeState) {}

  ngOnInit() {
    this.getEmployeeTableData();
    this.getEmpCount();
  }

  getEmployeeTableData() {
    this.employeeState.getEmployeeData();
    this.employeeState.getEmployeeTableInfo().subscribe(res => {
    this.employeeDataSource = res;
    });
  }

  getEmpCount() {
    this.employeeState.getEmployeesCount().subscribe(c => (this.empCount = c));
  }
}
