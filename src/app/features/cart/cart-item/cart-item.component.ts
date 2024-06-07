import { Component, Input } from "@angular/core";
import { CartItem } from "../../../shared/models/cart.model";

@Component({
  selector: "app-cart-item",
  standalone: true,
  imports: [],
  templateUrl: "./cart-item.component.html",
  styleUrl: "./cart-item.component.scss",
})
export class CartItemComponent {
  @Input() item!: CartItem;
}
