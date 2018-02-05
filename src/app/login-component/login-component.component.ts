import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {LoginService} from '../services/login.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {

  private user: any;
  constructor(private af: AngularFireAuth, private ls: LoginService, private router: Router) {
    if (ls.authenticated ) {
       this.afterSignIn();
    }

    af.auth.getRedirectResult().then((res) => {
      if (res.user) {
        this.afterSignIn();
      }
    });
   }

   private async afterSignIn() {
    await this.router.navigate(['/']);
  }

   signInWithGoogle() {
    this.ls.signInWithGoogle()
    .then((res) => {
       this.afterSignIn();
    });
  }

  signInWithTwitter() {

  }

  ngOnInit() {
    this.ls.aths.subscribe((res) => {this.user = res; } );
  }

}
