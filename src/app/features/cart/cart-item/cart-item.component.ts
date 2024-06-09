import { Component, Input } from "@angular/core";
import { CartItem } from "../../../shared/models/cart.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart-item",
  standalone: true,
  imports: [],
  templateUrl: "./cart-item.component.html",
  styleUrl: "./cart-item.component.scss",
})
export class CartItemComponent {
  @Input() item!: CartItem;
  changesSaved = false;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onIncrement() {
    this.changesSaved = true;
    this.cartService.addToCart(this.item, 1);

    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
