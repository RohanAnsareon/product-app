import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-mod',
  templateUrl: './basket-mod.component.html',
  styleUrls: ['./basket-mod.component.css']
})
export class BasketModComponent implements OnInit {
  constructor(public basketService: BasketService) { }

  removeProduct(id: number) {
    this.basketService.removeProduct(id);
  }

  ngOnInit() {

  }

}
