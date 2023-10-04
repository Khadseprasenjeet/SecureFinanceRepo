import { Component } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  constructor(public hs:EmployeeService){}
e:Employee[]

m1(){
  this.hs.view_employee().subscribe((e1:Employee[])=>{this.e=e1})
}

ngOnIt(){
  this.m1();
}

edit(e:Employee){
  this.hs.emp=Object.assign({},e);
}

}
