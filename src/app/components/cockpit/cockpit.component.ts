import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName = '';
  newServerContent = '';


  @Output('Screated') serverCreated = new EventEmitter();
  @Output('Bpcreated') blueprintcreated = new EventEmitter();


  onAddServer(nameInput:HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({ serverName:nameInput.value, serverContent: this.newServerContent })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintcreated.emit({ serverName: nameInput.value, serverContent: this.newServerContent })
  }
}
