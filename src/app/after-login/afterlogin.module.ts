import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule} from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StudentsComponent } from './students/students.component';
import { MessageComponent } from './message/message.component';
import { SettingComponent } from './setting/setting.component';

const approute: Routes = [
    {path: '', redirectTo: 'profile', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: 'staffs', component: StaffsComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'message', component: MessageComponent},
    {path: 'setting', component: SettingComponent}
];

@NgModule({
imports: [RouterModule.forChild(approute), FormsModule],
exports: [RouterModule],
declarations: [
    ProfileComponent,
    StaffsComponent,
    StudentsComponent,
    MessageComponent,
    SettingComponent
]
})

export class AfterLoginModule {}

