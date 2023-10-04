import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { RehomeComponent } from './rehome/rehome.component';

const routes: Routes = [
  {
    path:'',component:RehomeComponent
  },
  {
    path:'applyloan',component:ApplyloanComponent
  },
  {
    path:'addenq',component:CreateenquiryComponent
  },
  {path:'viewenq',component:ViewenquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationshipexecutiveRoutingModule { }
