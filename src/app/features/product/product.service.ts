import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: any[] = [];
  constructor() {}

  fetchAllProducts(): Product[] {
    return this.products;
  }

  fetchProduct(id: number) {
    return this.products.filter((product) => product.id === id);
  }

  createProduct(product: any) {
    this.products.push(product);
  }
}
