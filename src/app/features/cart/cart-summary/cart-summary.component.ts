import { Component, Input } from "@angular/core";
import { CartItem } from "../../../shared/models/cart.model";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-cart-summary",
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: "./cart-summary.component.html",
  styleUrl: "./cart-summary.component.scss",
})
export class CartSummaryComponent {
  @Input() cart?: CartItem[];
  totalCost?: number;

  ngOnInit() {
    this.totalCost = this.cart?.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
  }

  onPurchase() {
    console.log("placed order: ", this.cart);
  }
}
