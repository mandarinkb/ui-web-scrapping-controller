import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Web } from 'src/app/shared/controller/web.model';
import { ControlService } from 'src/app/shared/controller/control.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/shared/response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  collapedSideBar: boolean;
  displayedColumns: string[] = ['name', 'season', 'webName', 'status', 'edit'];
  dataSource = new MatTableDataSource<Web>();
  @ViewChild('paginator') paginator: MatPaginator;
  constructor(public service: ControlService ,
              private toastr: ToastrService ,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getWebController();
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  onChanged(event, id: number ) {
    if (event.checked) { // open
      const objOpen = {
        web_status: '1'
      };
      const objOpenStr = JSON.stringify(objOpen); // create json
      this.service.updateWebStatus(id, objOpenStr).subscribe((res: Response) => {
        if (res.status === 200) {
          this.toastr.success(res.message, 'Update status success.');
        }
      }, err => {
      });
      // console.log('open');
    } else {  // close
      const objClose = {
        web_status: '0'
      };
      const objCloseStr = JSON.stringify(objClose); // create json
      this.service.updateWebStatus(id, objCloseStr).subscribe((res: Response) => {
        if (res.status === 200) {
          this.toastr.success(res.message, 'Update status success.');
        }
      }, err => {
      });
      // console.log('close');
    }
  }

  getWebController() {
    this.service.getWeb().subscribe((res: Web[]) => {
      this.service.lisWeb = res;
      this.dataSource = new MatTableDataSource<Web>(this.service.lisWeb);  //  set datasource
      this.dataSource.paginator = this.paginator;  // set pagination
    }, err => {

    });
  }


  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
