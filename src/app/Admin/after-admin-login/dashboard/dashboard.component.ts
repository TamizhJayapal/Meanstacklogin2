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
  @ViewChild('closebutton') closebutton;

  constructor(private fb: FormBuilder,
              private adminservise: AdminService,
              private errordia: ErrordialogService) { }

  addProduct: FormGroup;
  ngOnInit() {
    this.addProduct = this.fb.group({
      productName: '',
      productCatogary: '',
      productPrice: '',
      productTax : ''
    });
  }

  productAdd() {
    this.adminservise.saveProduct(this.addProduct.value).subscribe((res: any) => {
      if (res) {
        this.closebutton.nativeElement.click();
        this.errordia.alertSuccess('Added Successfully');
      }
    });
  }
}
