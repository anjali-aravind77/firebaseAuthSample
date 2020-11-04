import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usersData;
  constructor(private fb:FormBuilder,
    private fireauth:AngularFireAuth,
    private authService: AuthService,
    private router:Router) { 
    //   this.fireauth.authState.subscribe(user => {
    //     if(user) {
    //       this.usersData = user;
    //       localStorage.setItem('user', JSON.stringify(this.usersData));
    //       JSON.parse(localStorage.getItem('user'));
    //     }
    //     else {
    //       localStorage.setItem('user', null);
    //       JSON.parse(localStorage.getItem('user'));
    //     }
    //   })
    // }

    // get isLoggedIn():boolean {
    //   const user = JSON.parse(localStorage.getItem('user'));
    //   return (user != null) ? true : false;
     }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  login() {
    const {email,password} = this.loginForm.value;
    // this.fireauth.signInWithEmailAndPassword(email,password)
    // .then(userdata => {
    //   this.router.navigateByUrl('home');
    //   // const result = userdata.user.getIdTokenResult();
    //   const userid = userdata.user.uid;
    //   console.log(userid)
    // })
    this.authService.login(email, password);
    
  }

}
