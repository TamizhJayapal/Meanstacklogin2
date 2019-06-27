import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrordialogService {

  constructor(private toastr: ToastrService) { }
  alertError(data) {
    this.toastr.error(data.message);
  }
}
