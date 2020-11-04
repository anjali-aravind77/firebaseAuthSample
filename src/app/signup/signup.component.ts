import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, 
    private fireauth:AngularFireAuth,
    private router:Router,
    private authservice:AuthService
    ) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  register() {
    // const {email,password} = this.registerForm.value;
    // this.fireauth.createUserWithEmailAndPassword(email,password)
    // .then(user => {
    //   console.log(user);
    //   this.router.navigateByUrl('');
    // })
    const {email,password} = this.registerForm.value;
    this.authservice.signUp(email, password);

  }

}
