import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;


  @Output('Screated') serverCreated = new EventEmitter();
  @Output('Bpcreated') blueprintcreated = new EventEmitter();


  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({ serverName:nameInput.value, serverContent: this.serverContentInput.nativeElement.value })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintcreated.emit({ serverName: nameInput.value, serverContent:this.serverContentInput.nativeElement.value })
  }
}
