import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetWeightComponent } from './get-weight.component';

const weightRoutes: Routes = [
  {
    path: '',
    component: GetWeightComponent,
     }
];

@NgModule({
    imports: [
      RouterModule.forChild(weightRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class GetWeightRoutingModule { }