import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  IsAuth: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  sub = new Subscription();

  ngOnInit() {
    this.IsAuth = this.authService.IsAuth();
    this.sub.add();
  }

  onLogout() {
    this.authService.logOut();
  }

  onLogin() {
    this.authService.login();
    this.router.navigate(["/"]);
  }
}
