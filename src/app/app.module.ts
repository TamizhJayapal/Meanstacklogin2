import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { TutoappComponent } from './tutoapp/tutoapp.component';
import { AdminprofileComponent } from './Admin/adminprofile/adminprofile.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { HttpCongfigInterceptor } from './interceptor/httpconfig.interceptor';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TutoappComponent,
    PagenotfoundComponent,
    RegisterComponent,
    AdminprofileComponent,
    AdminloginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [UserService, ReactiveFormsModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCongfigInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
