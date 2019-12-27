import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardComponent } from "./wizard.component";
import {
    MatToolbarModule,
  } from "@angular/material";
import { WizardRoutingModule } from './wizard-routing.module';


  @NgModule({
    declarations: [
      WizardComponent
    ],
    imports: [
      CommonModule, 
     // MatStepperModule,
      MatToolbarModule,
     // MatDialogModule,
         FormsModule, 
         ReactiveFormsModule,
      WizardRoutingModule,
    ],
    exports: [
      MatToolbarModule,
     WizardComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
  })
  export class WizardModule {
    

  }
  