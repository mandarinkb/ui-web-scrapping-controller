import { Injectable } from '@angular/core';
import { Folder } from './folder.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subfolder } from './subfolder.model';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { MyFileMainFolder } from './my-file-main-folder.model';
import { MyFileSubFolder } from './my-file-sub-folder.model';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  readonly rootURL = 'http://localhost:8080/api';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  formData: Folder;
  formSubFolder: Subfolder;
  // list: Folder[];
  list: MyFileMainFolder[];
  listSubFolder: MyFileSubFolder[];
  constructor(private http: HttpClient , private authen: AuthenService ) {}

  // create สร้าง main folder (แก้แล้ว)
  postMainFolder(formData: Folder, memberId: number) {
   return this.http.post(this.rootURL + '/folder/' + memberId + '?token=' + this.authen.getAuthenticated(), formData, this.httpOptions);
  }

  // read แสดง mainfolder และ ไฟล์ (แก้แล้ว)
  refreshMainFolder(memberId: number) {
  /*this.http
      .get(this.rootURL + '/my-file/' + id)
      .toPromise()
      .then(res => (this.list = res as Folder[]));
      */
      return this.http.get(this.rootURL + '/folder-file/' + memberId + '?token=' + this.authen.getAuthenticated());
  }

  // แก้ไขโฟเดอร์ (ใช้ได้ทั้ง mainfolder และ subfolder) (แก้แล้ว)
  editFolder(folderId: number) {
    return this.http.get(this.rootURL + '/folder/' + folderId + '?token=' + this.authen.getAuthenticated());
  }

  // update อัพเดต mainfolder และใช้ id ของ user ไปค้นหาชื่อคนที่อัพเดตโฟเดอร์ (แก้แล้ว)
  putMainFolder(formData: Folder , memberId: number) {
    return this.http.put(this.rootURL + '/folder/' + memberId + '?token=' + this.authen.getAuthenticated(), formData);
  }
  // delete ลบ mainfolder (เปลี่ยนสถานะเป็น I) (แก้แล้ว)
  deleteFolder(id: number) {
    return this.http.delete(this.rootURL + '/folder/' + id + '?token=' + this.authen.getAuthenticated());
  }

  // sub folder
  // read
  refreshSubFolder(id: number) {
      return this.http.get(this.rootURL + '/find-sub-folder-and-file/' + id);
  }

  // แก้ไขโฟเดอร์
 /* findByIdSubFolder(id: number) {
    return this.http.get(this.rootURL + '/find-by-folder-id/' + id);
  }*/
  // create
  postSubFolder(formSubFolder: Subfolder) {  // แก้แล้ว
    return this.http.post(
      this.rootURL + '/sub-folder',
      formSubFolder,
      this.httpOptions
    );
  }
  // update
  putSubFolder(formSubFolder: Subfolder , id: number) {  // แก้แล้ว
    return this.http.put(this.rootURL + '/folder/' + id, formSubFolder);
  }
  // delete
  deleteSubFolder(id: number) {
    return this.http.delete(this.rootURL + '/folder/' + id);
  }

}
