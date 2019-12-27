import { Injectable } from '@angular/core';
import { Label } from '../../models/label';
import { ShippingOption } from '../../models/shipping-option';

const shippingPrice = 0.40;

@Injectable({
  providedIn: 'root'
})
export class WeightCalculatingService {

  constructor() { }

  getCost(data: Label) {

    let cost = data.weight['Weight'] * shippingPrice *
    (data.shippingOption['ShippingOption'] === ShippingOption.Ground ? 1 : 1.5);
  
    return cost;

  }
}
