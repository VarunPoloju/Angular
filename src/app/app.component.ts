import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ {type :'server',name :'test server',content : 'Just a test'}];

  onServerCreated(cockpitdata:{serverName :string,serverContent:string}){
     this.serverElements.push({
      type: 'server',
      name: cockpitdata.serverName,
      content: cockpitdata.serverContent
    });
  }

  onBlueprintCreated(Blueprintdata:{serverName :string,serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: Blueprintdata.serverName,
      content: Blueprintdata.serverContent
    });
  }

  onchangeFirst(){
    this.serverElements[0].name = 'changed'
  }
}
