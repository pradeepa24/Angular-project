import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatStepperModule,
    MatDialogModule
  } from "@angular/material";
import { ShippingLabelComponent } from './shipping-label.component';

import { ShippingLabelRoutingModule } from './shipping-label-routing.module';


  @NgModule({
    declarations: [
      ShippingLabelComponent
    ],

    imports: [
      CommonModule, 
      MatDialogModule,
        ShippingLabelRoutingModule
    ],
    exports: [
      MatDialogModule,
      ShippingLabelComponent
    ],
   
  })
  export class ShippingLabelModule {}
  