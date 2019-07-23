import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFileComponent } from './pages/my-file/my-file.component';
import { CrudComponent } from './pages/crud/crud.component';
import { NewMyFileComponent } from './pages/new-my-file/new-my-file.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './layout/main/main.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

const routes: Routes = [
 // { path: '', redirectTo: '/my-file', pathMatch: 'full' },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path : 'new-my-file', component: NewMyFileComponent },
{ path : 'my-file', component: MyFileComponent },
{ path : 'crud', component: CrudComponent },
{ path : 'login', component: LoginComponent },
{ path : 'register', component: RegisterComponent },
{ path : 'main', component: MainComponent },
{ path : 'forget-password', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
