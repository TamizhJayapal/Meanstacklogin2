import { Component, OnInit, ViewChild  } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ErrordialogService } from '../../services/errordialog.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})


export class SettingComponent implements OnInit {

    @ViewChild('feedForm') formValues; // Added this
    name: any;
    email: any;
    subject: any;
    message: any;

  constructor(private userservice: UserService,
              private errdialog: ErrordialogService) { }

  ngOnInit() { }

  feedback(feedData) {
    this.userservice.saveFeedback(feedData).subscribe((res: any) => {
      if (res) {
          // this.router.navigate(['/login']);
          this.errdialog.alertSuccess('Your message has been sent.');
          this.formValues.resetForm();
         }
    });
}
}
