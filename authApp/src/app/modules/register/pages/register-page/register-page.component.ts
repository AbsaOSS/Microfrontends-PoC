import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  //assetUrl = process.env.ASSET_PATH;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.auth.loginWithPopup();
  }
}
