import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrordialogService } from '../../services/errordialog.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router,
              private errordia: ErrordialogService) { }

  ngOnInit() { }

  adminlogin(data) {
    if (data.adminemail === 'ajtam@g.com' && data.adminpassword === '1234') {
      this.router.navigate(['/adminprofile']);
    } else {
      this.errordia.alertError({message: 'Invalid credentials'});
    }
  }
}
