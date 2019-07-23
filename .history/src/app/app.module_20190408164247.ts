import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MyFileComponent } from './pages/my-file/my-file.component';
import { CrudComponent } from './pages/crud/crud.component';
import { EmployeeListComponent } from './pages/crud/employee-list/employee-list.component';
import { EmployeeComponent } from './pages/crud/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { MaterialModule } from './material/material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NewMyFileComponent } from './pages/new-my-file/new-my-file.component';
import { MainFolderComponent } from './pages/new-my-file/main-folder/main-folder.component';
import { SubFolderComponent } from './pages/new-my-file/sub-folder/sub-folder.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './layout/main/main.component';
import { ConfirmPasswordValidatorService } from './shared/confirm-password-validator.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MyFileComponent,
    CrudComponent,
    EmployeeListComponent,
    EmployeeComponent,
    ConfirmDialogComponent,
    NewMyFileComponent,
    MainFolderComponent,
    SubFolderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ConfirmPasswordValidatorService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    PdfViewerModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]

})
export class AppModule {}

