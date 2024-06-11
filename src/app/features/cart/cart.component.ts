import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { CommonModule } from "@angular/common";

import { Subscription } from "rxjs";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, CartSummaryComponent],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent implements OnInit {
  cart?: any;
  private sub = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.sub.add(
      this.cartService.fetchCart().subscribe((cartItems) => {
        this.cart = cartItems;
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
