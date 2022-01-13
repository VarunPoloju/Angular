import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent{

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingservice : LoggingService,private accountService : AccountsService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status)
    this.loggingservice.logstatuschange(status)
  }

}
