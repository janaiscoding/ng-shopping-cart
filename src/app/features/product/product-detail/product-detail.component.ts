import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../product.service";
import { Subscription, switchMap } from "rxjs";
import { CommonModule } from "@angular/common";
import { Product } from "../../../shared/models/product.model";
import { CartService } from "../../cart/cart.service";
import { CartItem } from "../../../shared/models/cart.model";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product?: Product;
  cart?: CartItem[];

  focusImg = "";

  sub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.productService.fetchProduct(params.get("id")!);
        })
      )
      .subscribe((product) => {
        this.product = product;
        this.focusImg = product.url;
      });

    this.cart = this.cartService.fetchCart();
  }

  onFocusImg(e: any, img: string) {
    this.focusImg = img;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
