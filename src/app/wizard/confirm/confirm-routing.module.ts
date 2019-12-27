import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm.component';


const confirmRoutes: Routes = [
  {
    path: '',
    component: ConfirmComponent,
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(confirmRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ConfirmRoutingModule { }