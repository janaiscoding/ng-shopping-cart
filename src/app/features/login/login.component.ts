import { Component, NgModule } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  onLogin(form: NgForm) {
    const value = form.value;
    console.log(value);
  }
}
