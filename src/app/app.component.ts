import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from './services/authendication.service';
import { Globaldata } from './globaldata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthendicationService, private global: Globaldata) {}
  title = 'EduOrg';
  username: any;
  ngOnInit() { 
    this.username = this.global.userName;
   }

  logout() {
    localStorage.removeItem('eduToken');
    location.reload();
  }

}
