import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  fetchProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
