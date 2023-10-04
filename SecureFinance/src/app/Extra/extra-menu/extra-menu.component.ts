import { Component } from '@angular/core';
import { UserOptions } from 'src/app/model/user-options';

@Component({
  selector: 'app-extra-menu',
  templateUrl: './extra-menu.component.html',
  styleUrls: ['./extra-menu.component.css']
})
export class ExtraMenuComponent {

  menus:Array<any>;
  type:string;
ngOnInit(): void {
 this.menus= UserOptions.userOptions;
 console.log(this.menus);

this.type=sessionStorage.getItem('type');

}

}
