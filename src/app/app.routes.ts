import { Routes } from "@angular/router";
import { ProductComponent } from "./features/product/product.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./features/product/product-detail/product-detail.component";
import { HomeComponent } from "./features/home/home.component";
import { CartComponent } from "./features/cart/cart.component";
import { authGuard } from "./shared/guards/auth-guard.service";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductComponent },
  { path: "product/:id", component: ProductDetailComponent },
  {
    path: "cart",
    canActivate: [authGuard],
    component: CartComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];
