import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthendicationService } from './authendication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    const authservice = this.injector.get(AuthendicationService);
    const token = authservice.getToken();
    const tokenized = req.clone({
      setHeaders: {
        Authorization: 'Berear ' + token
      }
    });
    return next.handle(tokenized);
  }
}
