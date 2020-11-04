import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private fireauth:AngularFireAuth,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  // logout() {
  //   this.fireauth.signOut()
  //   .then((user) => {
  //     this.router.navigate(['login'])
  //   })
  // }

  logout() {
    this.authService.signOut();
  }
}
