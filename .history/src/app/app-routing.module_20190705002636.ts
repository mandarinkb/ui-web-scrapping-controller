import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './layout/main/main.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ShareFileComponent } from './pages/share-file/share-file.component';
const routes: Routes = [
// { path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '', redirectTo: '/share-file', pathMatch: 'full' },
{ path : 'share-file', component: ShareFileComponent }/*,
{ path : 'login', component: LoginComponent },
{ path : 'register', component: RegisterComponent },
{ path : 'main', component: MainComponent },
{ path : 'forget-password', component: ForgetPasswordComponent },
{ path : 'reset-password', component: ResetPasswordComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
