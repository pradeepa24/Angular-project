import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ConfirmRoutingModule } from './confirm-routing.module';

  @NgModule({
    declarations: [
      ConfirmComponent
    ],

    imports: [
      CommonModule,
         FormsModule, 
         ReactiveFormsModule,
         ConfirmRoutingModule
    ],
    exports: [
      ConfirmComponent,
    ],
   
  })
  export class ConfirmModule {}
  