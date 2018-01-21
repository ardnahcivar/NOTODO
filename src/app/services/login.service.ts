import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  private authState:any;

  constructor(private af: AngularFireAuth,private db:AngularFireDatabase) {
      this.af.authState.subscribe((auth)=>{
        this.authState = auth;
      })
  }

  get authenticated():boolean{
    return this.authState !== null;
  }

  get currentUser():any{
    return this.authenticated?this.authState:null;
  }


  signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider){
     return this.af.auth.signInWithRedirect(provider)
    .then((credential)=>{
      this.authState = credential.user;
    })
    .catch(error => console.log(error));
  }
}
