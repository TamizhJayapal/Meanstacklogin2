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

  updateProduct(prod) {
    return this.http.put(this.url + '/updateProduct' + `/${prod._id}`, prod).pipe(map((res: any) => {
       return res;
    }, (error) => {
        console.log(error);
    }));
  }

  deleteProduct(prodId) {
    return this.http.delete(this.url + '/delProduct' + `/${prodId}`).pipe(map((res: any) => {
      return res;
    }, (error) => {
      console.log(error);
    }));
  }

  getProduct() {
    return this.http.get(this.url + '/getProduct').pipe(map((res: any) => {
      return res;
    }, (error) => {
      console.log(error);
    }));
  }

}
