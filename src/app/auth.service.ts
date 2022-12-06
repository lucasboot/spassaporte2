import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usr = ''
  pwd = ''
  credits: any
  used = false
  constructor() {
    this.credits = 0
   }
}
