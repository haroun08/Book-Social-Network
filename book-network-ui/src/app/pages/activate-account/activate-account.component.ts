import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/services/authentication.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {CodeInputModule} from "angular-code-input";

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    NgIf,
    CodeInputModule
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message : string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router : Router,
    private authService : AuthenticationService
  ) {
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
  this.authService.confirm({
    token
  }).subscribe({
    next: () => {
      this.message = 'Your Account has been successfully activated.\nNow you can procced to Login';
      this.submitted = true;
      this.isOkay = true;
    },
    error: () => {
      this.message = 'The Token has been expired or invalid';
      this.submitted = true;
      this.isOkay = false;
    }
  });
  }
}
