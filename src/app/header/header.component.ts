import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from '../services/authendication.service';
import { GlobaldataService } from '../globaldata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    username: any;
  constructor(private global: GlobaldataService, private authservice: AuthendicationService) { }

  ngOnInit() { 
    this.username = this.global.userData.name;
   }
  logout() {
    localStorage.removeItem('eduToken');
    localStorage.removeItem('username');
    location.reload();
  }
}

