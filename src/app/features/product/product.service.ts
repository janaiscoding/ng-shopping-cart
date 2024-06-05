import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "PAVÉ LINK SINGLE - Earrings - sterling silver",
      url: "https://img01.ztat.net/article/spp-media-p1/64ed35682ebe4136be05b677f880ed8f/a0fb117758da454f95fe15c70204b04d.jpg?imwidth=500&filter=packshot",
      price: 19.99,
      gallery: [
        "https://img01.ztat.net/article/spp-media-p1/dd7d60dd6dca4c458a58e98547182bc6/a29ae0060588451cba1dd2c4ed50d3d6.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/c5ae288465b146ecb594fe4c6e19705a/6e506d9fffe64c28a2e4ddc94ab95d24.jpg?imwidth=1800",
      ],
    },
    {
      id: 2,
      name: "PAVÉ LINK SINGLE - Earrings - sterling silver",
      url: "https://img01.ztat.net/article/spp-media-p1/64ed35682ebe4136be05b677f880ed8f/a0fb117758da454f95fe15c70204b04d.jpg?imwidth=500&filter=packshot",
      price: 19.99,
    },
    {
      id: 3,
      name: "PAVÉ LINK SINGLE - Earrings - sterling silver",
      url: "https://img01.ztat.net/article/spp-media-p1/64ed35682ebe4136be05b677f880ed8f/a0fb117758da454f95fe15c70204b04d.jpg?imwidth=500&filter=packshot",
      price: 19.99,
    },
    {
      id: 4,
      name: "PAVÉ LINK SINGLE - Earrings - sterling silver",
      url: "https://img01.ztat.net/article/spp-media-p1/64ed35682ebe4136be05b677f880ed8f/a0fb117758da454f95fe15c70204b04d.jpg?imwidth=500&filter=packshot",
      price: 19.99,
    },
    {
      id: 5,
      name: "PAVÉ LINK SINGLE - Earrings - sterling silver",
      url: "https://img01.ztat.net/article/spp-media-p1/64ed35682ebe4136be05b677f880ed8f/a0fb117758da454f95fe15c70204b04d.jpg?imwidth=500&filter=packshot",
      price: 19.99,
    },
  ];
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
