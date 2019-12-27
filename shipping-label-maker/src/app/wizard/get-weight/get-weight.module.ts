import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetWeightComponent } from '../get-weight/get-weight.component';

import { GetWeightRoutingModule } from './get-weight-routing.module';

  @NgModule({
    declarations: [
      GetWeightComponent
    ],

    imports: [
      CommonModule, 
         FormsModule, 
         ReactiveFormsModule,
         GetWeightRoutingModule
    ],
    exports: [
      GetWeightComponent,
    ],
    
  })
  export class GetWeightModule {}
  