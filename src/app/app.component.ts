import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from './services/authendication.service';
import { GlobaldataService } from './globaldata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthendicationService,
              private globaldataservice: GlobaldataService) {}
  title = 'Fashion';
  public userprofile;
  ngOnInit() {
    this.globaldataservice.userData = {name:localStorage.getItem('username')};
   }
}
