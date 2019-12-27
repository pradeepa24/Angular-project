import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { LoggingService } from '../features/login/logging/logging.service';
import { Router } from '@angular/router';
import { Address } from './models/address';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';
import { MatDialog } from '@angular/material';
import { FormGroup} from '@angular/forms';
import { WizardAction } from './models/wizard-action';
import { CommonService } from './common/common.service';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class WizardComponent implements OnInit {
  // isLinear = false;
  wizardAction = WizardAction;
WizardAction : typeof WizardAction = WizardAction;
senderForm : FormGroup;
receiverForm : FormGroup;
shippingOptionForm : FormGroup;
  // senderDetails: Address;
  // receiverDetails: Address;
  weightForm: FormGroup;
//   weight: object;
// shippingDetail: object;
// confirmation: string;
stepList: any;
label: any;
  constructor( private loggingService: LoggingService, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.stepList = this.commonService.stepList
    this.label = { from: {}, to: {}, weight: {}, shippingOption: {} };
    this.router.navigate(['/wizard/get-sender-address']);
   this.stepList.forEach(st => {
      if(st.step === 1) {
        st.active = true;
        st.visited = true;
      } else {
        st.active = false;
      }
    });
    this.commonService.setStepList(this.stepList);
}
onStep(step) {
  this.commonService.stepList.forEach(st => {
    if(st === step) {
      st.active = true;
    } else {
      st.active = false;
    }
  });
  this.commonService.setStepList(this.stepList);
}
  logout(){
    this.loggingService.logout();
    this.router.navigateByUrl('/login');
  }
  
//  receiveSenderDetails($event) {
// this.senderDetails = $event;
// console.log(this.senderDetails);
//  }
// receiveReceiverDetails($event) {
// this.receiverDetails = $event;
// console.log(this.receiverDetails);
// }  
// receiveWeightDetails($event) {
//   this.weight = $event;
//   console.log(this.weight);
// }
// receiveShippingDetails($event) {
//   this.shippingDetail = $event;
//   console.log(this.shippingDetail);
// }
// receiveConfirmation($event){
// // this.confirmation = $event;
// // console.log(this.confirmation);
// // console.log(this.label);
// if(this.confirmation === 'complete') {
// this.label.from = this.senderDetails;
// this.label.to = this.receiverDetails;
// this.label.weight = this.weight;
// this.label.shippingOption = this.shippingDetail;
// this.dialog.open(ShippingLabelComponent, {
//       width: '800px',
//       data: this.label
//     });
// }
// }


}
