import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';

const routes: Routes = [
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'departments', component: DepartmentlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentlistComponent,
  EmployeelistComponent
];
