import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css']
})
export class ApplicationDashboardComponent  implements OnInit{
  
   userType:String;
  ngOnInit(): void {
    this.userType=sessionStorage.getItem('type');
  }

}
