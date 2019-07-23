import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Web } from 'src/app/shared/controller/web.model';
import { ControlService } from 'src/app/shared/controller/control.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/shared/response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleService } from 'src/app/shared/schedule/schedule.service';
import { Schedule } from 'src/app/shared/schedule/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  collapedSideBar: boolean;
  displayedColumns: string[] = ['schedule name', 'cron expression', 'function name', 'project name', 'edit'];
  dataSource = new MatTableDataSource<Schedule>();
  @ViewChild('paginator') paginator: MatPaginator;
  constructor(public service: ScheduleService ,
              private toastr: ToastrService ,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.readSchedule();
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  readSchedule() {
    this.service.readSchedule().subscribe((res: Schedule[]) => {
      this.service.listSchedule = res;
      this.dataSource = new MatTableDataSource<Schedule>(this.service.listSchedule);  //  set datasource
      this.dataSource.paginator = this.paginator;  // set pagination
    }, err => {

    });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
