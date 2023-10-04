import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',component:AdminHomeComponent,children:[{ path:'adEmployee',component:AddEmployeeComponent}, {
      path:'viewEmployee',component:ViewEmployeeComponent
    },{path:'edit',component:EditEmployeeComponent}]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  
 }

