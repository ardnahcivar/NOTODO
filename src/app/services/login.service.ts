import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { log } from 'util';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {
  private authState: any = new BehaviorSubject(null);
  aths = this.authState.asObservable();

   constructor(private af: AngularFireAuth) {
      this.af.authState.subscribe((auth) => {
        this.authState.next(auth);
      }); 
  }

  get authenticated(): boolean{
    return this.authState;
  }

   get  currentUser(): any {
      return this.authenticated ? this.authState : null;
  }


  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
     return this.af.auth.signInWithRedirect(provider)
    .then((credential) => {
      this.authState = credential.user;
      return this.authState;
    })
    .catch(error => console.log(error));
  }
}
