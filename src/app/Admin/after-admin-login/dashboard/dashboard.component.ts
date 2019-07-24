import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { ErrordialogService } from '../../../services/errordialog.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @ViewChild('productForm') FormValues;
  productName: any;
  productCatogary: any;
  productPrice: any;
  productTax: any;

  constructor(private fb: FormBuilder,
              private adminservise: AdminService,
              private errordia: ErrordialogService) { }

  addProduct: FormGroup;
  productDetails: any[] = [];
  policies: any[] = [
    {id: 0, name: 'policy001'},
    {id: 2, name: 'policy002'},
    {id: 3, name: 'policy003'},
    {id: 4, name: 'policy004'},
    {id: 5, name: 'policy005'}
   ];

  ngOnInit() {
    this.addProduct = this.fb.group({
      productName: '',
      productCatogary: '',
      productPrice: '',
      productTax : ''
    });
    this.getProductDetails();
  }

  getProductDetails() {
    this.adminservise.getProduct().subscribe((res: any) => {
      if (res) {
        this.productDetails = res;
        console.log(this.productDetails);
        console.log(this.policies);
      }
    });
  }

  productAdd() {
    this.adminservise.saveProduct(this.addProduct.value).subscribe((res: any) => {
      if (res) {
        this.errordia.alertSuccess('Added Successfully');
        this.FormValues.resetForm();
      }
    });
  }
}
