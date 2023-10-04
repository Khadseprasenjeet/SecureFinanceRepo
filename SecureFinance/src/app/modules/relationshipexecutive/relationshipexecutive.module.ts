import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshipexecutiveRoutingModule } from './relationshipexecutive-routing.module';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { RehomeComponent } from './rehome/rehome.component';
import { MenuComponent } from 'src/app/templates/menu/menu.component';
import { AppHeaderComponent } from 'src/app/templates/app-header/app-header.component';


@NgModule({
  declarations: [
    ViewenquiryComponent,
    CreateenquiryComponent,
    ApplyloanComponent,
    RehomeComponent,
   
  ],
  imports: [
    CommonModule,
    RelationshipexecutiveRoutingModule,
    

  ]
})
export class RelationshipexecutiveModule { }
