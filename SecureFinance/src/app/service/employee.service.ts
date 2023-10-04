import { Injectable } from '@angular/core';
import { Employee } from '../class/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public html:HttpClient) { }

emp:Employee={
  e_id: 0,
  e_name: '',
  e_adress: '',
  e_role: 0,
  e_email: '',
  e_password: ''
}


save_employee(e:Employee)
{
  alert(e.e_password)
  return this.html.post(" ",e);


}

view_employee(){
  return this.html.get("");
}

}