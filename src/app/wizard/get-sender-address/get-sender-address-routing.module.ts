import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetSenderAddressComponent } from './get-sender-address.component';

const getSenderAddressRoutes: Routes = [
  {
    path: '',
    component: GetSenderAddressComponent
     }
];

@NgModule({
    imports: [
      RouterModule.forChild(getSenderAddressRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class GetSenderAddressRoutingModule { }