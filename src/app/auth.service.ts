import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;

  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isLoggedIn = true;
      }, 3000);
    });
  }

  logOut() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isLoggedIn = false;
      }, 3000);
    });
  }

  IsAuth() {
    return this.isLoggedIn;
  }
}
