import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DepartmnentlistComponent } from './departmnentlist/departmnentlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{path: '', component: DepartmnentlistComponent}, //  this is default path
  // redirects we need to use the pathmatch
  // it will directly go to the redirect - prefix

  { path: '', redirectTo: '/departmentlist', pathMatch: 'full' },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'departmentlist', component: DepartmnentlistComponent },
  { path: '**', component: PageNotFoundComponent } // this should be at the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  EmployeelistComponent,
  DepartmnentlistComponent,
  PageNotFoundComponent
];

// how to configure default path
