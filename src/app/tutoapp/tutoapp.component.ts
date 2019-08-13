import { Component, OnInit, Directive } from '@angular/core';
import { GlobaldataService } from '../globaldata.service';
import { AuthendicationService } from '../services/authendication.service';

@Component({
  selector: 'app-tutoapp',
  templateUrl: './tutoapp.component.html',
  styleUrls: ['./tutoapp.component.css']
})
export class TutoappComponent implements OnInit {
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
