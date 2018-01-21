import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
  providers:[LoginService]
})
export class LoginComponentComponent implements OnInit {

  constructor(private login:LoginService,private router:Router) {
    if(login.authenticated)
      this.afterSignIn();
   }

  private afterSignIn():void{
    this.router.navigate(['/']);
  }

  signInWithGoogle():void {
    this.login.signInWithGoogle()
    .then((res)=> {
      this.afterSignIn()
    });
  }

  signInWithTwitter() {

  }

  ngOnInit() {
  }

}
