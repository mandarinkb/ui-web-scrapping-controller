import { Injectable } from '@angular/core';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  formLogin: Login;
  constructor() { }
}
