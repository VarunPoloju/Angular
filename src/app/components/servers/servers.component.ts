import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = ' ';
  serverName = ' ';
  serverCreated: boolean = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created and name is ${this.serverName}`
  }

  onUpdateServer(event: any) {
    // console.log(event);
    this.serverName = event.target.value;
  }
}
