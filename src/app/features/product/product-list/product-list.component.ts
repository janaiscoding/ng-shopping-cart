import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { ProductService } from "../product.service";
import { Product } from "../../../shared/models/product.model";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { radixHeart, radixHeartFilled } from "@ng-icons/radix-icons";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  viewProviders: [provideIcons({ radixHeart, radixHeartFilled })],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: any = [];

  sub = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sub.add(
      this.productService.fetchAll().subscribe((products) => {
        setTimeout(() => {
          this.products = products;
        }, 500);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onAddToFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
}
