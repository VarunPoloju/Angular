import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logstatuschange(accountStatus){
    console.log('A server status changed, new status: ' + accountStatus);
  }
}

