import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Web } from 'src/app/shared/controller/web.model';
import { ControlService } from 'src/app/shared/controller/control.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  public web_status: string;


  displayedColumns: string[] = ['name', 'season', 'webName', 'status'];
  dataSource = new MatTableDataSource<Web>();
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(public service: ControlService) { }
  ngOnInit() {
    this.getWebController();
  }

  onChanged(event, id: number ) {




    if (event.checked) { // open
      const objOpen = {
        web_status: '1'
      };
      const objOpenStr = JSON.stringify(objOpen);
      this.service.updateWebStatus(id, objOpenStr);
    } else {  // close
      const objClose = {
        web_status: '0'
      };
      const objCloseStr = JSON.stringify(objClose);
      this.service.updateWebStatus(id, objCloseStr);
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
}
