import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { expirationDateValidator } from '../expiration-date.directive';
import { ItemsService } from './../cart/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [ './checkout.component.css' ]
})
export class CheckoutComponent implements OnInit {

  username = 'Harold Finch';
  months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  years = [];
  checkoutForm: FormGroup;
  total = 0;
  isPaid = false;
  orderNumber = '#209456211020';

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    const items = this.itemsService.items;
    for (const item of items) {
      this.total += item.price;
    }

    for (let i = 0; i < 21; i++) {
      this.years.push(new Date().getFullYear() + i);
    }

    this.checkoutForm = new FormGroup({
      creditCardNumber: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
          Validators.minLength(13),
          Validators.maxLength(19)
        ]
      ),
      expireMonth: new FormControl('Month', [ Validators.required ]),
      expireYear: new FormControl('Year', [ Validators.required ]),
      cvv: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
          Validators.minLength(3),
          Validators.maxLength(4)
        ]
      )
    }, { validators: expirationDateValidator });
  }

  onSubmit(): void {
    this.isPaid = !this.isPaid;
  }

}
