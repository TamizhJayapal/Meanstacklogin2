import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Globaldata } from '../globaldata';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userservice: UserService, 
      private router: Router, 
      private global: Globaldata,
      private toastr: ToastrService) {}

  loginUser(userCred) {
    this.userservice.loginUser(userCred).subscribe((res: any) => {
     if (res) {
        localStorage.setItem('eduToken', res.token);
        this.router.navigate(['/tutoapp']);
        this.global.userName = res.name;
        this.toastMessage("success");
     }
    });
  }
  toastMessage(message) {
      this.toastr.success(message);
  }
  ngOnInit() { }
}
