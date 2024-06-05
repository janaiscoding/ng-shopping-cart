import { Component, OnInit } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { ProductService } from "../product.service";
import { Product } from "../../../shared/models/product.model";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { radixHeart, radixHeartFilled } from "@ng-icons/radix-icons";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  viewProviders: [provideIcons({ radixHeart, radixHeartFilled })],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.fetchAllProducts();
  }

  onAddToFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
}
