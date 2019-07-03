import { Component, OnInit } from '@angular/core';

import { Globaldata } from '../../globaldata';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private global: Globaldata) { }
  username;
  ngOnInit() {
    this.username = this.global.userName;
  }

}
