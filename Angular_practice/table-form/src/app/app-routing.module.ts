import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTableComponent } from './page-table/page-table.component';
import { PageFormComponent } from './page-form/page-form.component';


const routes: Routes = [
  { path: 'page-table', component: PageTableComponent },
  { path: 'page-form', component: PageFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
