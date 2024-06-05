import { ResolveFn, Routes } from "@angular/router";
import { ProductComponent } from "./features/product/product.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./features/product/product-detail/product-detail.component";
import { HomeComponent } from "./features/home/home.component";

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve("child a");

export const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "products",
    component: ProductComponent,
  },
  {
    path: "product/:id",
    component: ProductDetailComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];
