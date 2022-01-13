import { Component } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService : LoggingService,private accountService : AccountsService){

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus)
    this.loggingService.logstatuschange(accountStatus)
  }
}
