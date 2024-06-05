import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { CartItem } from "../../shared/models/cart.model";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent implements OnInit {
  cart?: CartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.fetchCart();

    console.log("this.cart: ", this.cart);
  }
}
