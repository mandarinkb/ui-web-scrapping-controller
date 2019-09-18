import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Web } from 'src/app/shared/controller/web.model';
import { UsersService } from 'src/app/shared/users/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  collapedSideBar: boolean;
  data: any = [
    {userName: 'man', role: 'admin' }];

  displayedColumns: string[] = ['userName', 'role', 'action'];
  dataSource = new MatTableDataSource<Web>();
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(public service: UsersService,
              private dialogService: DialogService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Web>(this.data);  //  set datasource
    this.dataSource.paginator = this.paginator;  // set pagination
    this.resetForm();
  }
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    // clear form
    this.service.formUsersData = {
      id: null,
      username: '',
      password: '',
      role: ''
    };
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
  // modal
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      console.log(form.value);
    } else {

    }
  }

}
