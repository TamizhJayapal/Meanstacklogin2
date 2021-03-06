import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { GlobaldataService } from '../globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userservice: UserService,
              private router: Router,
              private globalService: GlobaldataService) {}

  loginUser(userCred) {
    this.userservice.loginUser(userCred).subscribe((res: any) => {
     if (res) {
        localStorage.setItem('eduToken', res.token);
        localStorage.setItem('username', res.name);
        this.router.navigate(['/fashion']);
        this.globalService.userData = {name: res.name}
     }
    });
  }
  ngOnInit() { }
}
