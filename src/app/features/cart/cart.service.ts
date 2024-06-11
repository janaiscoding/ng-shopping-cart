import { Injectable } from "@angular/core";

import { CartItem } from "../../shared/models/cart.model";
import { Product } from "../../shared/models/product.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  fetchCart() {
    return this.cart$;
  }

  addToCart(product: Product, quantity: number = 1) {
    const currentCart = this.cartSubject.getValue();
    const existingItem = currentCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentCart.push({ ...product, quantity });
    }

    this.cartSubject.next(currentCart);
  }

  removeItem(productId: string): void {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter((item) => item.id !== productId);
    this.cartSubject.next(updatedCart);
  }
}
