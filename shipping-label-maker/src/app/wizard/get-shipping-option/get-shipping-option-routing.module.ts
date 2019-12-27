import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetShippingOptionComponent } from './get-shipping-option.component';

const shippingOptRoutes: Routes = [
  {
    path: '',
    component: GetShippingOptionComponent
     }
];

@NgModule({
    imports: [
      RouterModule.forChild(shippingOptRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class GetShippingOptionRoutingModule { }