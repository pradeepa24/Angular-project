import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WizardAction } from '../models/wizard-action';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { MatDialog } from '@angular/material';
import { ShippingLabelComponent } from '../shipping-label/shipping-label.component';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  wizardAction = WizardAction;
  WizardAction : typeof WizardAction = WizardAction;
  label:any;
  //@Output() processedDataFromStep5 = new EventEmitter<string>();
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.label = { from: {}, to: {}, weight: {}, shippingOption: {} };
  }
onAction(action) {
  // this.processedDataFromStep5.emit('complete');
 if(action === 1) {
   this.router.navigate(['/wizard/get-shipping-option']);
   this.commonService.stepList.forEach(st => {
     if(st.routeId === 'confirm') {
       st.visited = true;
       st.active = false;
     } else {
     if(st.routeId === 'get-shipping-option') {
       st.active = true;
     } else {
       st.active = false;
     }
    }
   });
   this.commonService.setStepList(this.commonService.stepList);
 } else {
   if(action === 3) {
     this.setData();
     //this.router.navigate(['/wizard/shipping-label']);
   }
 }
}
setData() {
  this.label.from = this.commonService.senderForm.value;
this.label.to = this.commonService.receiverForm.value;
this.label.weight = this.commonService.weightForm.value;
this.label.shippingOption = this.commonService.shippingOptionForm.value;
// this.dialog.open(ShippingLabelComponent, {
//       width: '800px',
//       data: this.label
//     });
this.commonService.setLabel(this.label);
this.router.navigate(['/wizard/shipping-label']);
this.commonService.stepList.forEach(st => {
  if(st.routeId === 'shipping-label'){
st.active = true;
st.visited = true;
  } else {
    st.active = false;
  } 
});
this.commonService.setStepList(this.commonService.stepList);

// this.commonService.resetForms();
}
}
