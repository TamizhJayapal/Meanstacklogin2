import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = {};
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(user) {
      this.userservice.registerUser(user).subscribe((res: any) => {
        if (res) {
            this.router.navigate(['/login']);
           }
      });
  }
}
