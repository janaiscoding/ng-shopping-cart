import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { CommonModule } from "@angular/common";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartItem } from "../../shared/models/cart.model";
import { ActivatedRoute, Router } from "@angular/router";

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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.fetchCart();

    console.log("this.cart: ", this.cart);
  }
}
