import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutoapp',
  templateUrl: './tutoapp.component.html',
  styleUrls: ['./tutoapp.component.css']
})
export class TutoappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('eduToken');
    location.reload();
  }

}
