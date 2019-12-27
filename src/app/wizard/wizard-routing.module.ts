import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from "./wizard.component";
import { AuthGuard } from '../auth.guard';

const wizardRoutes: Routes = [
  {
    path: '',
    component: WizardComponent,
    canActivate: [AuthGuard],
    children : [
        {
            path: 'get-sender-address',
            loadChildren: () => import('./get-sender-address/get-sender-address.module').then(mod => mod.GetSenderAddressModule),
            canActivateChild: [AuthGuard],
        },
        {
            path: 'get-receiver-address',
            loadChildren: () => import('./get-receiver-address/get-receiver-address.module').then(mod => mod.GetReceiverAddressModule),
            canActivateChild: [AuthGuard],
        },
        {
            path: 'get-weight',
            loadChildren: () => import('./get-weight/get-weight.module').then(mod => mod.GetWeightModule),
            canActivateChild: [AuthGuard],
        },
        {
            path: 'get-shipping-option',
            loadChildren: () => import('./get-shipping-option/get-shipping-option.module').then(mod => mod.GetShippingOptionModule),
            canActivateChild: [AuthGuard],
        },
        {
            path: 'confirm',
            loadChildren: () => import('./confirm/confirm.module').then(mod => mod.ConfirmModule),
            canActivateChild: [AuthGuard],
        },
        {
            path: 'shipping-label',
            loadChildren: () => import('./shipping-label/shipping-label.module').then(mod => mod.ShippingLabelModule),
            canActivateChild: [AuthGuard],
        }
      ]
     }
];

@NgModule({
    imports: [
      RouterModule.forChild(wizardRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class WizardRoutingModule { }