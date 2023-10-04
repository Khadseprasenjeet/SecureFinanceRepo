import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AdminHomeComponent,
    EditEmployeeComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
