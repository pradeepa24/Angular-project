import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WizardAction } from "../models/wizard-action";
import { Router } from "@angular/router";
import { CommonService } from "../common/common.service";
@Component({
  selector: "app-get-sender-address",
  templateUrl: "./get-sender-address.component.html",
  styleUrls: ["./get-sender-address.component.scss"]
})
export class GetSenderAddressComponent implements OnInit {
  wizardAction = WizardAction;
  WizardAction: typeof WizardAction = WizardAction;
  //processingForm: any;
  // @Input() senderForm: FormGroup;
  senderForm: FormGroup;
  @Output() processedData = new EventEmitter<object>();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
   // console.log(WizardAction.Next);

    // if(this.senderForm.value !== null) {
    //   this.senderForm = this.commonService.senderForm;
    // } else {
    // console.log(this.commonService.senderForm.value);
    this.senderForm = this.formBuilder.group({
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
    if (this.commonService.senderForm) {
      //console.log(this.commonService.senderForm.value);
      this.senderForm = this.commonService.senderForm;
    }
  }

  hasError(controlName: string, errorName: string) {
    // console.log(this.senderForm.controls[controlName]);
    if (
      this.senderForm.controls[controlName].touched &&
      this.senderForm.controls[controlName].invalid
    ) {
      this.formValid();
      return this.senderForm.controls[controlName].hasError(errorName);
    }
  }
  formValid() {
    if(this.senderForm.invalid) {
      this.commonService.stepList.forEach(st => {
        if (st.step !== 1) {
          st.visited = false;
        } 
      });
      this.commonService.setStepList(this.commonService.stepList);
    } else {
      //this.action(WizardAction.Next);
      this.commonService.stepList.forEach(st => {
        if (st.step === 1) {
          st.visited = true;
        } 
      });
      this.commonService.setStepList(this.commonService.stepList); 
    }
  }

  action(action) {
    this.commonService.setSenderForm(this.senderForm);
    if (this.senderForm.valid) {
      // this.processedData.emit(this.senderForm.value);
      this.router.navigate(["/wizard/get-receiver-address"]);
      this.commonService.stepList.forEach(st => {
        if (st.routeId === "get-receiver-address") {
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
