import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Web } from 'src/app/shared/controller/web.model';
import { ControlService } from 'src/app/shared/controller/control.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/shared/response.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  displayedColumns: string[] = ['name', 'season', 'webName', 'status'];
  dataSource = new MatTableDataSource<Web>();
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(public service: ControlService ,
              private toastr: ToastrService) { }
  ngOnInit() {
    this.getWebController();
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
}
