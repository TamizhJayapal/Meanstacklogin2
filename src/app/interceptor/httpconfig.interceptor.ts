import { Injectable } from '@angular/core';
import { ErrordialogService } from '../services/errordialog.service';
import {
    HttpErrorResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpCongfigInterceptor implements HttpInterceptor {
    constructor(private errordialog: ErrordialogService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('eduToken');
        if (token) {
            request = request.clone({
               headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(map((event: HttpEvent<any>) => {
                                            return event; }),
                                         catchError((error: HttpErrorResponse) => {
                                            console.log(error.error);
                                            let errData = {};
                                            errData = {
                                                reason: error && error.error.reason ? error.error.reason : '',
                                                message: error.error.errors.message,
                                                status: error.status
                                            };
                                            console.log(errData);
                                            this.errordialog.alertError(errData);
                                            return throwError(error);
                                        }));
    }
}

