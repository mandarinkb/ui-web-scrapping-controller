import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Web } from './web.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  readonly rootURL = 'http://localhost:8080/api';
  // readonly rootURL = 'http://172.17.0.5:8080/api';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  formData: Web;
  lisWeb: Web[];
  constructor(private http: HttpClient) { }

  getWeb() {
    return this.http.get(this.rootURL + '/web');
  }
  readWebById(id: number) {
    return this.http.get(this.rootURL + '/web/' + id);
  }
  updateWebStatus(id: number , formData: any ) {
    return this.http.put(this.rootURL + '/web-status/' + id , formData);
  }
  saveWeb(form: NgForm) {
    return this.http.post(this.rootURL + '/web', form);
  }

  updateWeb(id: number, form: NgForm) {
    return this.http.put(this.rootURL + '/web/' + id , form);
  }

  deleteWeb(id: number) {
    return this.http.delete(this.rootURL + '/web/' + id);
  }
}
