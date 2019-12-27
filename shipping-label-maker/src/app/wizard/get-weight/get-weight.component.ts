import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WizardAction } from "../models/wizard-action";
import { CommonService } from "../common/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-get-weight",
  templateUrl: "./get-weight.component.html",
  styleUrls: ["./get-weight.component.scss"]
})
export class GetWeightComponent implements OnInit {
  wizardAction = WizardAction;
  WizardAction: typeof WizardAction = WizardAction;
  // @Input() weightForm: FormGroup;
  weightForm: FormGroup;
  // @Output() processedDataFromStep3 = new EventEmitter<object>();
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.weightForm = this.formBuilder.group({
      Weight: ["", Validators.required]
    });
    if (this.commonService.weightForm) {
      //console.log(this.commonService.senderForm.value);
      this.weightForm = this.commonService.weightForm;
    }
  }

  hasError(controlName: string, errorName: string) {
    if (
      this.weightForm.controls[controlName].touched &&
      this.weightForm.controls[controlName].dirty
    ) {
      this.formValid();
      return this.weightForm.controls[controlName].hasError(errorName);
    }
  }
  formValid() {
    if(this.weightForm.invalid){
      this.commonService.stepList.forEach(st => {
        if (st.routeId !== "get-weight") {
          st.visited = false;
        } 
      });
      this.commonService.setStepList(this.commonService.stepList);
    } else {
      this.commonService.stepList.forEach(st => {
        if (st.routeId === "get-weight") {
          st.visited = true;
        } 
      });
      this.commonService.setStepList(this.commonService.stepList);
    }
  }
  onAction(action) {
    // this.processedDataFromStep3.emit(this.weightForm.value);
    this.commonService.setWeightForm(this.weightForm);
    if (action === 2) {
      if (this.weightForm.valid) {
        this.router.navigate(["/wizard/get-shipping-option"]);
        this.commonService.stepList.forEach(st => {
          if (st.routeId === "get-shipping-option") {
            st.active = true;
          } else {
            st.active = false;
          }
        });
        this.commonService.setStepList(this.commonService.stepList);
      } 
    } else {
      if (action === 1) {
        if(this.weightForm.valid) {
          this.commonService.stepList.forEach(st => {
            if (st.routeId === "get-receiver-address") {
              st.active = true;
              //st.visited = true;
            } else {
              st.active = false;
            }
          });
          this.commonService.setStepList(this.commonService.stepList);
          this.router.navigate(["/wizard/get-receiver-address"]);
        } 
      }
    }
  }
}
