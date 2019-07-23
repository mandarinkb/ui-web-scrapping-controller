import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/shared/response.model';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/shared/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: number;
  constructor(private service: LoginService ,  private toastr: ToastrService ,
              private router: Router , private authen: AuthenService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formLogin = {
      MEMBER_ID: null,
      EMAIL: '',
      PASSWORD: ''
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postLogin(form.value).subscribe((res: Response) => {
     console.log(res);
     console.log(res.message);
     console.log(res.status);
     if (res.status === 200) {
      this.toastr.success(res.message, 'EMP. Login');
      this.authen.setAuthenticated(res.accessToken); // set token ลง client browser
      this.router.navigate(['/my-file']); // ไปยังหน้าดังกล่าว
      this.id = res.id;
     } else {
      this.toastr.error(res.message, 'EMP. Login');
     }
     this.resetForm(form);
    });
  }

  get Id() {
    return this.id;
  }

}
