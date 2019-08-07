import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from './services/authendication.service';
import { Globaldata } from './globaldata';
import { GlobaldataService } from './globaldata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthendicationService,
              private global: Globaldata,
              private globaldataservice: GlobaldataService) {}
  title = 'EduOrg';
  public userprofile;
  ngOnInit() {
    this.global.userName = localStorage.getItem('username');
    this.globaldataservice.userData = {name:localStorage.getItem('username')};
   }
}
