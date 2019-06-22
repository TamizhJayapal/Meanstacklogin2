import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient ) { }

  registerUser(user) {
    return this.http.post(this.url + '/register', user).pipe(map((res) => {
      return res;
    }));
  }

  loginUser(userCred): Observable<any> {
    return this.http.post(this.url + '/login', userCred).pipe(

      map((res) => {
        return res;
      }),
      retry(1),
      catchError(this.handleError)

    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = `client-side error: ${error.error.message}`;
    } else {
        errorMessage = `${error.error}`;
    }
    window.alert(errorMessage);
    return throwError('http Response Error');
  }
}
