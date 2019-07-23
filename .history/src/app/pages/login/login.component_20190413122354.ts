import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/shared/response.model';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/shared/authen.service';
import { RememberMeService } from 'src/app/shared/remember-me.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkbox: boolean;
  constructor(private service: LoginService ,  private toastr: ToastrService ,
              private router: Router , private authen: AuthenService ,
              private remmber: RememberMeService) { }

  ngOnInit() {
    this.resetForm();
    this.checkbox = false;
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formLogin = {
      MEMBER_ID: null,
      EMAIL: '',
      PASSWORD: '',
      REMEMBER_ME: null
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postLogin(form.value).subscribe((res: Response) => {
     if (res.status === 200) {
      this.toastr.success(res.message, 'EMP. Login');
      this.authen.setAuthenticated(res.accessToken); // set token ลง session client browser
      this.authen.setId(res.id.toString());          // set id ลง session client browser
      this.authen.setUsername(res.username);         // set username ลง session client browser
      this.authen.setRole(res.role);                 // set role ลง session client browser

      if (this.checkbox === true) {
        console.log(this.service.formLogin.EMAIL);
        console.log(this.service.formLogin.PASSWORD);
      }


      this.router.navigate(['/my-file']); // ไปยังหน้าดังกล่าว

     } else {
      this.toastr.error(res.message, 'EMP. Login');
     }
     this.resetForm(form);
    });
  }
  // ปุ่ม checkbox remember me
  rememberMe(event) {
    this.checkbox = event.checked;
    console.log(event.checked);
  }
}
