import { Injectable } from "@angular/core";

import { CartItem } from "../../shared/models/cart.model";
import { Product } from "../../shared/models/product.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart: CartItem[] = [];

  constructor() {}

  fetchCart() {
    return this.cart;
  }

  addToCart(product: Product, quantity: number = 1) {
    const existingItem = this.cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
    }
  }

  removeItem(productId: number): void {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }
}
