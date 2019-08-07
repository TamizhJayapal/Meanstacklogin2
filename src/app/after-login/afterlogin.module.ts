import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule} from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';

const approute: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'setting', component: SettingComponent}
];

@NgModule({
imports: [RouterModule.forChild(approute), FormsModule],
exports: [RouterModule],
declarations: [
    ProfileComponent,
    SettingComponent,
    HomeComponent
]
})

export class AfterLoginModule {}

