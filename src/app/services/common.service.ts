import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CommonService {
  private login: LoginService;

  get loginInstance(){
    let af: AngularFireAuth;
    return this.login || (this.login = new LoginService(af));
  }

  constructor(private af: AngularFireAuth) {
    console.log("CALLED COMMON");
    this.login = new LoginService(af);
   }

}
