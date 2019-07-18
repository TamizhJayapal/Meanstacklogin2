import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TutoappComponent } from './tutoapp/tutoapp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { ForadminworkComponent } from './foradminwork/foradminwork.component';
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
    path: 'eduwork/Admin', component: AdminComponent
  },
  {
    path: 'forAdmin', component: ForadminworkComponent
  },
  {
    path: 'tutoapp' , component: TutoappComponent, loadChildren: './after-login/afterlogin.module#AfterLoginModule',
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
