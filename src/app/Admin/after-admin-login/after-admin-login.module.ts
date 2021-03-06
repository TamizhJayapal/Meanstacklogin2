import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoute: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ReactiveFormsModule,
    RouterModule.forChild(appRoute)
  ],
  exports: [RouterModule],
})
export class AfterAdminLoginModule { }
