import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthendicationService {

  constructor() { }
  currentUserValue(): boolean {
        var access;
        var token = localStorage.getItem('eduToken');
        if(token) {
          access =true;
        }else {
          access = false;
        }
        return access;
  }
}
