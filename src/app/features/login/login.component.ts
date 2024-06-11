import { Component, NgModule } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { AuthService } from "../../shared/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  onLogin(form: NgForm) {
    const value = form.value;
    console.log(value);

    this.authService.login();
    this.router.navigate(["/"]);
  }
}
