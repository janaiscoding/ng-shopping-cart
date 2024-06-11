import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { CommonModule } from "@angular/common";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartItem } from "../../shared/models/cart.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent implements OnInit {
  cart?: any;
  totalCost = 0;

  private sub = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.sub.add(
      this.cartService.fetchCart().subscribe((cartItems) => {
        this.cart = cartItems;
      })
    );
    console.log("this.cart: ", this.cart);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onPurchase() {
    console.log("placed order: ", this.cart);
  }
}
