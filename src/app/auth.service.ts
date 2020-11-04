import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData;

  constructor(
    public fireauth: AngularFireAuth,
    public router:Router
  ) {
    this.fireauth.authState.subscribe(user => {
      if(user) {
        this.userData  = user;
        localStorage.setItem('user', JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
     
    })
   }

   signUp(email, password) {
     this.fireauth.createUserWithEmailAndPassword(email, password)
     .then(userSignup => {
        console.log(userSignup);
        this.router.navigateByUrl('login');
     })
   }

   get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user'));
     return (user != null) ? true : false;
   }
   login (email, password) {
     this.fireauth.signInWithEmailAndPassword(email, password)
     .then(userLogin => {
       console.log(userLogin);
       this.router.navigateByUrl('home');
     }).catch(err => {
       window.alert(err);
     })
   }
   signOut() {
     return this.fireauth.signOut()
     .then(() => {
       localStorage.removeItem('user');
       this.router.navigateByUrl('login');
     })
   }
}
