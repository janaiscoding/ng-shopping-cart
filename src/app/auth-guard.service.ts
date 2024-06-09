import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const service = inject(AuthService);

  if (service.IsAuth()) {
    return true;
  }

  router.navigate(["/login"]);
  return false;
};
