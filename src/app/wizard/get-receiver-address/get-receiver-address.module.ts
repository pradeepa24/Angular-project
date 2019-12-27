import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetReceiverAddressComponent } from '../get-receiver-address/get-receiver-address.component';
import { GetReceiverAddressRoutingModule } from './get-receiver-address-routing.module';

  @NgModule({
    declarations: [
      GetReceiverAddressComponent
    ],
    imports: [
      CommonModule,
         FormsModule, 
         ReactiveFormsModule,
         GetReceiverAddressRoutingModule
    ],
    exports: [
      GetReceiverAddressComponent
    ],
   
  })
  export class GetReceiverAddressModule {}
  