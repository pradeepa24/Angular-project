import { MatDialog } from '@angular/material';
import { Component, OnInit} from '@angular/core';
import { WeightCalculatingService } from './weight-calculating/weight-calculating.service';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.scss']
})
export class ShippingLabelComponent implements OnInit{
shippingCost: number;
data: any;
  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private router : Router,
     private weightCalculatingService : WeightCalculatingService, private commonService : CommonService, public dialog: MatDialog) {
      // public dialogRef: MatDialogRef<ShippingLabelComponent>,
      // this.dialog.open( { ,
      //         width: '800px',
      //         data: data
      //       });
      }

  ngOnInit() {
    this.data = this.commonService.label;
      this.shippingCost = this.weightCalculatingService.getCost(this.data);
  }
reset() {
  this.commonService.resetForms();
  console.log( this.commonService.stepList);
  this.router.navigate(['/wizard']);
  window.location.reload();
  // this.commonService.stepList.forEach(st => {
  //   //st.active = false;
  //   if(st.routeId === 'get-sender-address'){
  // st.active = true;
  //   }  
  // });
  // this.commonService.setStepList(this.commonService.stepList);
  // console.log( this.commonService.stepList);

}
}
