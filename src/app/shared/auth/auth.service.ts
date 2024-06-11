import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isLoggedInSubject.next(true);
      }, 500);
    });
  }

  logOut() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isLoggedInSubject.next(false);
      }, 500);
    });
  }

  IsAuth() {
    return this.isLoggedIn$;
  }
}
