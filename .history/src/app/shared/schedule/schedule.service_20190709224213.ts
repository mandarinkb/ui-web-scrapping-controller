import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  readonly rootURL = 'http://localhost:8080/api';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  listSchedule: Schedule[];
  constructor(private http: HttpClient) { }
  readSchedule() {
    return this.http.get(this.rootURL + '/web');
  }
}
