import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss']
})
export class SettingProfileComponent implements OnInit {
  collapedSideBar: boolean;

  isActiveProfile: boolean; // สมาชิก
  isActiveChangePassword: boolean; // สมาชิก
  isActiveQuota: boolean; // สมาชิก
  isActiveTrashcan: boolean; // สมาชิก
  constructor() { }

  ngOnInit() {
  }
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

    // สมาชิก
    activeDepartment() {
      this.isActiveProfile = false;
      this.isActiveChangePassword = true;
    }
}
