import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { CartService } from "../../features/cart/cart.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  cartItemCount: number = 0;

  private sub = new Subscription();

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.sub.add(
      this.authService.IsAuth().subscribe((authStatus) => {
        this.isAuth = authStatus;
      })
    );

    this.sub.add(
      this.cartService.cart$.subscribe((cart) => {
        this.cartItemCount = cart.reduce(
          (count, item) => count + item.quantity,
          0
        );
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogout() {
    this.authService.logOut();
  }
}
