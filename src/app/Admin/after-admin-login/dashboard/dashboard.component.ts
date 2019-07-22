import { Component, OnInit } from '@angular/core';
import {FormBuilder,
        FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  addProduct: FormGroup;

  ngOnInit() {
    this.addProduct = this.fb.group({
      productName: '',
      productCatogary: '',
      productPrice: '',
      productTax : ''
    });
   // this.addProduct.valueChanges.subscribe(console.log);
  }
  productAdd() {
    console.log(this.addProduct.value);
  }
}
