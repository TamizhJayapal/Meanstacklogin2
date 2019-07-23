import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  saveProduct(productData) {
    return this.http.post(this.url + '/addProduct', productData).pipe(map((res: any) => {
      return res;
    }, (error) => {
      console.log(error);
    }));
  }

}
