import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit{
senderForm: FormGroup;
receiverForm: FormGroup;
weightForm: FormGroup;
shippingOptionForm: FormGroup;
wildCardStepList: any;
stepList: any = [
  {step:1,routeId:'get-sender-address',active:false, visited: false},
  {step:2,routeId:'get-receiver-address',active:false, visited: false},
{step:3,routeId:'get-weight',active:false, visited: false},
{step:4,routeId:'get-shipping-option',active:false, visited: false},
{step:5,routeId:'confirm',active:false, visited: false},
{step:6,routeId:'shipping-label',active:false, visited: false}];

label: any ={from:{},to:{},weight:{},shippingOption:{}};
  constructor(private formBuilder: FormBuilder) { 
  
  }
  ngOnInit() {
    
    //this.wildCardStepList = this.stepList;
    this.senderForm  =  this.formBuilder.group({
      Name: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      Street: ['', Validators.compose([ Validators.required])],
      City: ['', Validators.compose([Validators.minLength(5),Validators.required])],
      Zip: ['', Validators.compose([Validators.minLength(5),Validators.required])],
      State: ['', Validators.compose([Validators.required])]
  });
  this.receiverForm  =  this.formBuilder.group({
    Name: ['', Validators.compose([Validators.minLength(5), Validators.required])],
    Street: ['', Validators.compose([Validators.required])],
    City: ['', Validators.compose([Validators.minLength(5), Validators.required])],
    Zip: ['', Validators.compose([Validators.minLength(5), Validators.required])],
    State: ['', Validators.compose([Validators.required])]
});
this.weightForm = this.formBuilder.group({
  Weight: ['', Validators.required]
});
this.shippingOptionForm = this.formBuilder.group({
  ShippingOption: ['1', Validators.required]
});
  }
setSenderForm(form) {
this.senderForm = form;
}
setReceiverForm(form) {
this.receiverForm = form;
}
setWeightForm(form) {
this.weightForm = form;
}
setShippingOptionForm(form) {
this.shippingOptionForm = form;
}
setLabel(label) {
this.label.from = label.from;
this.label.to = label.to;
this.label.weight = label.weight;
this.label.shippingOption = label.shippingOption;
}
setStepList(list) {
this.stepList = list;
}
resetForms() {
  this.stepList = [
    {step:1,routeId:'get-sender-address',active:false, visited: false},
    {step:2,routeId:'get-receiver-address',active:false, visited: false},
  {step:3,routeId:'get-weight',active:false, visited: false},
  {step:4,routeId:'get-shipping-option',active:false, visited: false},
  {step:5,routeId:'confirm',active:false, visited: false},
  {step:6,routeId:'shipping-label',active:false, visited: false}];
  
this.ngOnInit();
}
}
