import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetReceiverAddressComponent } from './get-receiver-address.component';

const receiverRoutes: Routes = [
  {
    path: '',
    component: GetReceiverAddressComponent,
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(receiverRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class GetReceiverAddressRoutingModule { }