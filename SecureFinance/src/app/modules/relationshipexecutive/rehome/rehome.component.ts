import { Component } from '@angular/core';

@Component({
  selector: 'app-rehome',
  templateUrl: './rehome.component.html',
  styleUrls: ['./rehome.component.css']
})
export class RehomeComponent {
  userType:String;
  ngOnInit(): void {
    this.userType=sessionStorage.getItem('type');
  }

}
