import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = ' ';
  serverName= 'Test Server';
  serverCreated: boolean = false;
  servers = ['Test server 1', 'Test server 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created and name is ${this.serverName}`
  }

  onUpdateServer(event: any) {
    this.serverName = event.target.value;
  }
}
