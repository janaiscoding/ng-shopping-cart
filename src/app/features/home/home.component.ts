import { Component, OnInit } from "@angular/core";
import { ProductListComponent } from "../product/product-list/product-list.component";
import { ProductService } from "../product/product.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  totalCount: number = 0;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    // this.totalCount = this.service.fetchAllProducts().length;
  }
}
