import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BasketModComponent } from './basket-mod/basket-mod.component';
import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor(private basketService: BasketService, private dialog: MatDialog, private router: Router) {
    const dialogRef = this.dialog.open(BasketModComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // console.log('mujik');
        this.basketService.basket.splice(0, this.basketService.basket.length);
      }
      this.router.navigate(['/products']);
    });
   }
}
