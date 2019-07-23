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
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ShareFileComponent } from './pages/share-file/share-file.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MyFileComponent,
    ConfirmDialogComponent,
    NewMyFileComponent,
    MainFolderComponent,
    SubFolderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ConfirmPasswordValidatorService,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ShareFileComponent,
    DashboardComponent,
    FooterComponent
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
    PdfViewerModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]

})
export class AppModule {}

