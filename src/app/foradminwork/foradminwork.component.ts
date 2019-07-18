import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray , FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-foradminwork',
  templateUrl: './foradminwork.component.html',
  styleUrls: ['./foradminwork.component.css']
})
export class ForadminworkComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      phones: this.fb.array([])
    });

  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

   addPhone() {
     const phone = this.fb.group({
      productid: [],
      productname: [],
      productcatogary: [],
      productprice: [],
      producttax: [],
      productimage: []
     });

     this.phoneForms.push(phone);
   }

   deletePhone(i) {
     alert(i);
     this.phoneForms.removeAt(i);
   }

}
