import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  fetchProduct(id: string) {
    return this.products.filter((product) => product.id === id);
  }

  createProduct(product: any) {
    this.products.push(product);
  }
}
