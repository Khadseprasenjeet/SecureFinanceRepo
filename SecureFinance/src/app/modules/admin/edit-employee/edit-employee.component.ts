import { Component } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  constructor(public es:EmployeeService){}


  save_enquiry(e:Employee)
  {
  this.es.save_employee(e).subscribe();
  }

}
