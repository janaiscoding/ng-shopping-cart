import { Component } from "@angular/core";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login();
  }
}
