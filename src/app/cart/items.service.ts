import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    items = [
        {
            name: 'Plus Minus (Charcoal)',
            price: 26,
            imgUrl: 'https://i.imgur.com/d3IeFZM.png'
        },
        {
            name: 'Premium Ampersand Crewneck',
            price: 62,
            imgUrl: 'https://i.imgur.com/3OgpA1B.png'
        }
    ];
}
