import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'document management';
  userPost: string = 'ระบบจัดเก็บเอกสาร';
  constructor() { }

  ngOnInit() {

  }


}
