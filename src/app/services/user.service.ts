import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient ) { }

  registerUser(user) {
    return this.http.post(this.url + '/register', user).pipe(map((res) => {
      return res;
    },
    (error) => {
      console.log(error);
    }));
  }

  saveFeedback(feedData) {
    return this.http.post(this.url + '/feed', feedData).pipe(map((res) => {
      return res;
    },
    (error) => {
      console.log(error);
    }));
  }

  loginUser(userCred) {
    return this.http.post(this.url + '/login', userCred).pipe(map((res) => {
        return res;
      },
      (error) => {
        console.log(error);
      }));
  }

  getUserDetails() {

  }
}
