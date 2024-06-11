import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
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
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  private sub = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.sub.add(
      this.authService.IsAuth().subscribe((authStatus) => {
        this.isAuth = authStatus;
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogout() {
    this.authService.logOut();
  }
}
