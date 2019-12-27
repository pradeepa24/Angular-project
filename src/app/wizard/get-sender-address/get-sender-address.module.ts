import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetSenderAddressComponent } from '../get-sender-address/get-sender-address.component';
import { GetSenderAddressRoutingModule } from './get-sender-address-routing.module';



  @NgModule({
    declarations: [
      GetSenderAddressComponent,
    ],
    imports: [
        CommonModule,
         FormsModule, 
         ReactiveFormsModule,
         GetSenderAddressRoutingModule,
    ],
    exports: [
      GetSenderAddressComponent
    ],
   
  })
  export class GetSenderAddressModule {}
  