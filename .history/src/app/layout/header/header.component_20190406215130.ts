import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/shared/authen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoImgSrc: string = 'assets/images/product-doc-management.png';
  userImgSrc: string = 'assets/images/user-icon-1.jpg';
  userName: string = 'document management';
  userPost: string = 'ระบบจัดเก็บเอกสาร';

  username: string;
  constructor(private authen: AuthenService) { }

  ngOnInit() {
    this.username = this.authen.getUsername();

  }

  logOut() {
    this.authen.clearAllSession();
  }


}
