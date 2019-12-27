import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { WizardAction } from "../models/wizard-action";
import { CommonService } from "../common/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-get-receiver-address",
  templateUrl: "./get-receiver-address.component.html",
  styleUrls: ["./get-receiver-address.component.scss"]
})
export class GetReceiverAddressComponent implements OnInit {
  wizardAction = WizardAction;
  WizardAction: typeof WizardAction = WizardAction;
  // @Input() receiverForm: FormGroup;
  receiverForm: FormGroup;
 // @Output() processedDataFromStep2 = new EventEmitter<object>();
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.receiverForm = this.commonService.receiverForm;
    //if(!this.receiverForm.value) {
    this.receiverForm = this.formBuilder.group({
      Name: [
        "",
        Validators.compose([Validators.minLength(5), Validators.required])
      ],
      Street: ["", Validators.compose([Validators.required])],
      City: [
        "",
        Validators.compose([Validators.minLength(5), Validators.required])
      ],
      Zip: [
        "",
        Validators.compose([Validators.minLength(5), Validators.required])
      ],
      State: ["", Validators.compose([Validators.required])]
    });
    // }
    if (this.commonService.receiverForm) {
      //console.log(this.commonService.senderForm.value);
      this.receiverForm = this.commonService.receiverForm;
    }
  }

  hasError(controlName: string, errorName: string) {
    if (
      this.receiverForm.controls[controlName].touched &&
      this.receiverForm.controls[controlName].dirty
    ) {
      this.formValid();
      return this.receiverForm.controls[controlName].hasError(errorName);
    }
  }

  formValid(){
    if(this.receiverForm.invalid) {
      this.commonService.stepList.forEach(st => {
        if (st.step !== 2) {
          st.visited = false;
        } 
      });
      this.commonService.setStepList(this.commonService.stepList);
    } else {
      this.commonService.stepList.forEach(st => {
        if (st.step === 2) {
          st.visited = true;
        } 
      });
      this.commonService.setStepList(this.commonService.stepList);
    }
  }
  onAction(action) {
    // this.processedDataFromStep2.emit(this.receiverForm.value);
    this.commonService.setReceiverForm(this.receiverForm);
    if (action === 1) {
      if(this.receiverForm.valid) {
        this.router.navigate(["/wizard/get-sender-address"]);
        this.commonService.stepList.forEach(st => {
          if (st.routeId === "get-sender-address") {
            st.active = true;
          } else {
            st.active = false;
          }
        });
        this.commonService.setStepList(this.commonService.stepList);
      } 
      
     
    } else {
      if (action === 2) {
        if (this.receiverForm.valid) {
          this.router.navigate(["/wizard/get-weight"]);
          this.commonService.stepList.forEach(st => {
            if (st.routeId === "get-weight") {
              st.active = true;
              // st.visited = true;
            } else {
              st.active = false;
            }
          });
          this.commonService.setStepList(this.commonService.stepList);
        } 
       
      }
    }
  }
}
