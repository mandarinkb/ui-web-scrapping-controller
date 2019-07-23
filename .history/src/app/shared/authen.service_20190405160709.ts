import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private accessKey = 'token';
  constructor() { }

  // set token ลง client browser
  setAuthenticated(token: string) {
    sessionStorage.setItem(this.accessKey, token);
  }

  // get token ใน client browser
  getAuthenticated() {
    return sessionStorage.getItem(this.accessKey);
  }

  // ลบ token ใน client browser
  clearAuthenticated() {
    sessionStorage.removeItem(this.accessKey);
  }

  setId(id: string) {
    sessionStorage.setItem('id', id);
  }

  getId() {
    return sessionStorage.getItem('id');
  }

  clearId() {
    sessionStorage.removeItem('id');
  }

}
