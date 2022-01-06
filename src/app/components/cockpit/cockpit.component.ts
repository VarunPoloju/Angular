import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';


  @Output() serverCreated = new EventEmitter();
  @Output() blueprintcreated = new EventEmitter();


  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
  }

  onAddBlueprint() {
    this.blueprintcreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
  }
}
