import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  collapedSideBar: boolean;
  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  onDelete() {
    this.dialogService
      .confirm(
        'ยืนยันการลบรายการ..',
        'ต้องการลบรายการหรือไม่ ?'
      )
      .then(confirmed => {  // กดok => confirmed = true , กดcancel => confirmed = false
        if (confirmed) {
          console.log('ok');
        } else {
          // กรณี cancel ลบ
          console.log('cancel');
        }
      })
      .catch(() =>
        // กรณี ปิด confirmed modal ด้วยวิธีอื่นๆ
        console.log('exit')
      );
  }
}
