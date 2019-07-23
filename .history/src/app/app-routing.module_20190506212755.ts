import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFileComponent } from './pages/my-file/my-file.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './layout/main/main.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ShareFileComponent } from './pages/share-file/share-file.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingProfileComponent } from './pages/setting-profile/setting-profile.component';

const routes: Routes = [
 // { path: '', redirectTo: '/my-file', pathMatch: 'full' },
 { path: '', redirectTo: '/login', pathMatch: 'full' },
// { path: '', redirectTo: '/reset-password', pathMatch: 'full' },
{ path : 'dashboard', component: DashboardComponent },
{ path : 'my-file', component: MyFileComponent },
{ path : 'share-file', component: ShareFileComponent },
{ path : 'login', component: LoginComponent },
{ path : 'register', component: RegisterComponent },
{ path : 'main', component: MainComponent },
{ path : 'forget-password', component: ForgetPasswordComponent },
{ path : 'reset-password', component: ResetPasswordComponent },
{ path : 'setting-profile', component: SettingProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
