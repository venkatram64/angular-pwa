import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
  {path: "list", component: EmployeeComponent},
  {path: "add", component: EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
