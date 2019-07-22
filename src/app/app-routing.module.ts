import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TutoappComponent } from './tutoapp/tutoapp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './Admin/adminprofile/adminprofile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
  },
  {
    path: 'adminprofile',
    component: AdminprofileComponent,
    loadChildren: './Admin/after-admin-login/after-admin-login.module#AfterAdminLoginModule'
  },
  {
    path: 'tutoapp' ,
    component: TutoappComponent,
    loadChildren: './after-login/afterlogin.module#AfterLoginModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
