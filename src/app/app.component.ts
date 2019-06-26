import { Component, OnInit } from '@angular/core';
import { AuthendicationService } from './services/authendication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthendicationService) {}
  title = 'EduOrg';
  ngOnInit() {
   }
}
