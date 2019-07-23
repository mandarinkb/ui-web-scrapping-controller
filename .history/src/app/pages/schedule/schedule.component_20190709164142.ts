import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Web } from 'src/app/shared/controller/web.model';
import { ControlService } from 'src/app/shared/controller/control.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['name', 'season', 'webName', 'status'];
  dataSource = new MatTableDataSource<Web>();
  @ViewChild('paginator') paginator: MatPaginator;
  constructor(public service: ControlService) { }

  ngOnInit() {
    this.getWebController();
  }

  getWebController() {
    this.service.getWeb().subscribe((res: Web[]) => {
      this.service.lisWeb = res;
      this.dataSource = new MatTableDataSource<Web>(this.service.lisWeb);  //  set datasource
      this.dataSource.paginator = this.paginator;  // set pagination
    }, err => {

    });
  }

}
