import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import{ AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthGuard } from './auth.guard';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path:'login',component:LoginComponent
    
  },
  {
    path:'register', component:SignupComponent
  },
  // {
  //   path:'home', component:HomeComponent,
  //   canActivate:[AngularFireAuthGuard],
  //   data:{authGuardPipe: redirectUnauthorizedToLogin}
  // }
  {
    path:'home', component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
