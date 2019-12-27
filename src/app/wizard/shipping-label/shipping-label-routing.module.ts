import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingLabelComponent } from './shipping-label.component';


const shippingLabelRoutes: Routes = [
  {
    path: '',
    component: ShippingLabelComponent
     }
];

@NgModule({
    imports: [
      RouterModule.forChild(shippingLabelRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ShippingLabelRoutingModule { }