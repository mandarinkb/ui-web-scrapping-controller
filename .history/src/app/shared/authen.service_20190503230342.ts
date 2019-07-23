import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private accessKey = 'token';
  private accessId = 'id';
  private accessUsername = 'username';
  private accessRole = 'role';
  private accessDepartmentId = 'departmentId';
  private accessDepartmentName = 'departmentName';
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
    sessionStorage.setItem(this.accessId, id);
  }

  getId() {
    return sessionStorage.getItem(this.accessId);
  }

  clearId() {
    sessionStorage.removeItem(this.accessId);
  }

  setUsername(username: string) {
    sessionStorage.setItem(this.accessUsername, username);
  }

  getUsername() {
    return sessionStorage.getItem(this.accessUsername);
  }

  clearUsername() {
    sessionStorage.removeItem(this.accessUsername);
  }

  setRole(role: string) {
    sessionStorage.setItem(this.accessRole, role);
  }

  getRole() {
    return sessionStorage.getItem(this.accessRole);
  }

  clearRole() {
    sessionStorage.removeItem(this.accessRole);
  }

  setDepartmentId(departmentId: string) {
    sessionStorage.setItem(this.accessDepartmentId, departmentId);
  }

  getDepartmentId() {
    return sessionStorage.getItem(this.accessDepartmentId);
  }

  clearDepartmentId() {
    sessionStorage.removeItem(this.accessDepartmentId);
  }

  setDepartmentName(departmentName: string) {
    sessionStorage.setItem(this.accessDepartmentName, departmentName);
  }

  getDepartmentName() {
    return sessionStorage.getItem(this.accessDepartmentName);
  }

  clearDepartmentName() {
    sessionStorage.removeItem(this.accessDepartmentName);
  }

  clearAllSession() {
    this.clearAuthenticated();
    this.clearId();
    this.clearUsername();
    this.clearRole();
    this.clearDepartmentId();
  }
}
