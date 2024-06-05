import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../product.service";
import { switchMap } from "rxjs";
import { CommonModule } from "@angular/common";
import { Product } from "../../../shared/models/product.model";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.service.fetchProduct(parseInt(params.get("id")!, 10));
        })
      )
      .subscribe((product) => {
        this.product = product; // Store the product data
      });
  }
}
