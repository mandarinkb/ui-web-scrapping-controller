import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Web } from './web.model';

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
  lisWeb: Web[];
  constructor(private http: HttpClient) { }

  getWeb() {
    return this.http.get(this.rootURL + '/web');
  }

  updateWebStatus(id: number , formData: any ) {
    return this.http.put(this.rootURL + '/web/' + id , formData);
  }

}
