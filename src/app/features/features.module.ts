import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatToolbarModule
  } from "@angular/material";
import { LoginComponent } from './login/login.component';

  @NgModule({
    declarations: [
        LoginComponent  
    ],
    imports: [
        CommonModule,  
         FormsModule, 
         ReactiveFormsModule 
    ],
    exports: [
        LoginComponent
    ]
  })
  export class FeaturesModule {}
  