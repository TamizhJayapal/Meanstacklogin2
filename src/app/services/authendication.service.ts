import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthendicationService {

  constructor() { }
  currentUserValue(): boolean {
        let access;
        const token = localStorage.getItem('eduToken');
        if (token) {
          access = true;
        } else {
          access = false;
        }
        return access;
  }

  getToken() {
    return localStorage.getItem('eduToken');
  }
}
