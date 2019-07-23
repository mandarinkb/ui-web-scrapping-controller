import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //avatarImgSrc: string = 'assets/images/avatar.png';
  logoImgSrc: string = 'assets/images/product-doc-management.png';
  userImgSrc: string = 'assets/images/user-icon-1.jpg';
  userName: string = 'document management';
  userPost: string = 'ระบบจัดเก็บเอกสาร';
  constructor() { }

  ngOnInit() {

  }


}
