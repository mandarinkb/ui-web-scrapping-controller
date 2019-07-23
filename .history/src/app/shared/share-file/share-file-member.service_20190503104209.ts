import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { AuthenService } from '../authen.service';
import { ShareFileMember } from './share-file-member.model';
import { Observable } from 'rxjs';
import { Folder } from '../folder.model';
import { Subfolder } from '../subfolder.model';

@Injectable({
  providedIn: 'root'
})
export class ShareFileMemberService {
  listMemberDepartment: ShareFileMember[];
  token: string;
  updUser: string;
  memberId: string;
  readonly rootURL = 'http://localhost:8080/api';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient ,
              private authen: AuthenService) {
              this.token = '?token=' + this.authen.getAuthenticated();
              this.updUser = '&updUser=' + this.authen.getUsername();
              this.memberId = this.authen.getId();
  }

  // เรียกดูสมาชิกของหน่วยงาน
  readMemberDepartment(departmentId: number) {
          return this.http.get(this.rootURL + '/department-member/' + departmentId + this.token);
  }

  // อัพโหลดไฟล์ (แก้แล้ว)
  postUploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('files', file);
    const req = new HttpRequest('POST', this.rootURL + '/share-file-upload/' + this.memberId +
                                '?type=folder&token=' + this.authen.getAuthenticated(), formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  // อัพโหลดไฟล์ subfolder (แก้แล้ว)
  postUploadFileSubFolder(file: File , subFolderId: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('files', file);
    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('POST', this.rootURL + '/share-file-upload/' + this.memberId +
                                '?type=subfolder&token=' + this.authen.getAuthenticated() + '&subFolderId=' + subFolderId, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  // ลบไฟล์ (เปลี่ยนสถานะเป็น I) (ใช้ได้ทั้ง folder และ subfolder) (แก้แล้ว)
  deleteFile(id: number) {
    return this.http.delete(this.rootURL + '/share-file-delete-file/' + id + this.token + this.updUser );
  }

  // ดาวน์โหลดไฟล์ (ใช้ได้ทั้ง folder และ subfolder) (แก้แล้ว)
  downloadFile(id: number) {
    return this.http.get(this.rootURL + '/share-file-download/' + id + this.token , {responseType: 'blob'});
  }




   // create สร้าง folder
   createFolder(formData: Folder, memberId: number) {
    return this.http.post(this.rootURL + '/folder/' + memberId + '?token=' + this.authen.getAuthenticated(), formData, this.httpOptions);
   }

   // read แสดง folder และ file
   readFolder(memberId: number) {
       return this.http.get(this.rootURL + '/folder-file/' + memberId + '?token=' + this.authen.getAuthenticated());
   }

   // แก้ไขโฟเดอร์ (ใช้ได้ทั้ง folder และ subfolder)
   editFolder(folderId: number) {
     return this.http.get(this.rootURL + '/folder/' + folderId + '?token=' + this.authen.getAuthenticated());
   }

   // update อัพเดต folder และใช้ id ของ user ไปค้นหาชื่อคนที่อัพเดตโฟเดอร์
   updateFolder(formData: Folder , memberId: number) {
     return this.http.put(this.rootURL + '/folder/' + memberId + '?token=' + this.authen.getAuthenticated(), formData);
   }
   // delete ลบ folder (ใช้ได้ทั้ง folder และ subfolder) (เปลี่ยนสถานะเป็น I)
   deleteFolder(id: number) {
     return this.http.delete(this.rootURL + '/folder/' + id + '?token=' + this.authen.getAuthenticated());
   }

   // read แสดง subfolder และ file
   readSubFolder(subfolderId: number) {
       return this.http.get(this.rootURL + '/subfolder-file/' + subfolderId + '?token=' + this.authen.getAuthenticated() );
   }

   // create สร้าง subfolder โดยเซ็ท subfolder id มาแล้วผ่าน[(ngModel)]ของ form
   createSubFolder(formSubFolder: Subfolder) {
     return this.http.post(this.rootURL + '/subfolder' + '?token=' + this.authen.getAuthenticated(), formSubFolder, this.httpOptions);
   }

   // update อัพเดต subfolder และใช้ id ของ user ไปค้นหาชื่อคนที่อัพเดตโฟเดอร์
   updateSubFolder(formSubFolder: Subfolder , memberId: number) {
     return this.http.put(this.rootURL + '/folder/' + memberId + '?token=' + this.authen.getAuthenticated(), formSubFolder);
   }

}
