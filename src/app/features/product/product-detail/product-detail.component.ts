import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Observable, switchMap } from "rxjs";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Product } from "../../../shared/models/product.model";
import { CartService } from "../../cart/cart.service";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product>;
  focusImg: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => this.productService.fetchProduct(params.get("id")!))
    );
  }

  onFocusImg(img: string) {
    this.focusImg = img;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product, 1);
  }
}
