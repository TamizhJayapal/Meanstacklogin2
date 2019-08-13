import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../globaldata.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private globalService: GlobaldataService) { }
  username:any;
  ngOnInit() {
    this.username = this.globalService.userData.name;
  }

}
