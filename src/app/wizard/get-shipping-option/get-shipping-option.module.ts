import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetShippingOptionComponent } from '../get-shipping-option/get-shipping-option.component';
import { GetShippingOptionRoutingModule } from './get-shipping-option-routing.module';



  @NgModule({
    declarations: [
      GetShippingOptionComponent,
    ],

    imports: [
      CommonModule, 
         FormsModule, 
         ReactiveFormsModule,
         GetShippingOptionRoutingModule
    ],
    exports: [
      GetShippingOptionComponent
    ],
   
  })
  export class GetShippingOptionModule {}
  