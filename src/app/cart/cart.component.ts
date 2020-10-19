import { Component, OnInit } from '@angular/core';

import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.css' ]
})
export class CartComponent implements OnInit {
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.items;
  }

}
