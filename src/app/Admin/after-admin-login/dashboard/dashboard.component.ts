import { Component, OnInit } from '@angular/core';
import {FormBuilder,
        FormGroup,
        FormControl

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
      ProductName: new FormControl(),
      ProductCatogary: new FormControl(),
      ProductPrice: new FormControl(),
      ProductTax : new FormControl()
     // ProductImage : new FormControl('')
    });
  }
  productAdd() {
    console.log(this.addProduct.value);
  }
}
