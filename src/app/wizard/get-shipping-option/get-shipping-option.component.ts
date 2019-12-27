import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WizardAction } from "../models/wizard-action";
import { Label } from "../models/label";
import { CommonService } from "../common/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-get-shipping-option",
  templateUrl: "./get-shipping-option.component.html",
  styleUrls: ["./get-shipping-option.component.scss"]
})
export class GetShippingOptionComponent implements OnInit {
  shippingOption: {
    Ground: 1;
    Priority: 2;
  };

  label: Label;
  wizardAction = WizardAction;
  WizardAction: typeof WizardAction = WizardAction;
  // @Input() shippingOptionForm: FormGroup;
  shippingOptionForm : FormGroup;
  //@Output() processedDataFromStep4 = new EventEmitter<object>();
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.shippingOptionForm = this.commonService.shippingOptionForm;
    // if(!this.shippingOptionForm.value) {
    this.shippingOptionForm = this.formBuilder.group({
      ShippingOption: ["1", Validators.required]
    });
    //}
    if (this.commonService.shippingOptionForm) {
      //console.log(this.commonService.senderForm.value);
      this.shippingOptionForm = this.commonService.shippingOptionForm;
    }
  }

  //  hasError(controlName: string, errorName: string) {
  //   return this.shippingOptionForm.controls[controlName].hasError(errorName);
  // }
  onAction(action) {
    //this.processedDataFromStep4.emit(this.shippingOptionForm.value);
    this.commonService.setShippingOptionForm(this.shippingOptionForm);
    if (action === 2) {
      if (this.shippingOptionForm.valid) {
        this.router.navigate(["/wizard/confirm"]);
        this.commonService.stepList.forEach(st => {
          if (st.routeId === "confirm") {
            st.active = true;
            
          } else {
            st.active = false;
            if(st.routeId === 'get-shipping-option'){
              st.visited = true;
            }
          }
        });
        this.commonService.setStepList(this.commonService.stepList);
      } 
    } else {
      if (action === 1) {
        if(this.shippingOptionForm.valid){
          this.router.navigate(["/wizard/get-weight"]);
          this.commonService.stepList.forEach(st => {
            if (st.routeId === "get-weight") {
              st.active = true;
              //st.visited = true;
            } else {
              st.active = false;
              if(st.routeId === 'get-shipping-option'){
                st.visited = true;
              }
            }
          });
          this.commonService.setStepList(this.commonService.stepList);
        }
       
      }
    }
  }
}
