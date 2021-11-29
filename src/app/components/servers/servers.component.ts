import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!!';
  serverName = ' ';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created!'
  }
  onUpdateServer(event: any) {
    // console.log(event);
this.serverName = event.target.value;
  }
}
