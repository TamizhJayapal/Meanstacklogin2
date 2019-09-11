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
  selectedFile: File = null;
  fd = new FormData();
  ngOnInit() {
    this.addProduct = this.fb.group({
      productName: '',
      productCatogary: '',
      productPrice: '',
      productTax : ''
    });
    this.getProductDetails();
  }
  onchangeFile(event) {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile);
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(this.fd);
  }
  getProductDetails() {
    this.adminservise.getProduct().subscribe((res: any) => {
      if (res) {
        this.productDetails = res;
      }
    });
  }

  onSubmit() {
    if (this.addProduct.value._id) {
      this.adminservise.updateProduct(this.addProduct.value).subscribe((res: any) => {
        const i = this.productDetails.findIndex(x => x._id === res._id);
        this.productDetails.splice(i, 1, res);
        this.errordia.alertSuccess('Update Successfully');
        this.FormValues.resetForm();
      });
    } else {
      this.adminservise.saveProduct(this.addProduct.value).subscribe((res: any) => {
        if (res) {
          this.productDetails.push(res);
          this.errordia.alertSuccess('Added Successfully');
          this.FormValues.resetForm();
        }
      });
    }
  }

  productUpdate(i, productValues) {
    this.addProduct = this.fb.group(productValues);
  }

  productDel(i, productid) {
    this.adminservise.deleteProduct(productid).subscribe((res: any) => {
      if (res) {
        this.productDetails.splice(i, 1);
      }
    });
  }
}
