import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extraheader',
  templateUrl: './extraheader.component.html',
  styleUrls: ['./extraheader.component.css']
})
export class ExtraheaderComponent {
  @Input() getUserType:string;

}
