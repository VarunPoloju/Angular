import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ {type :'server',name :'test server',content : 'Just a test'}];
  value =10;
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

  
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
  onDestroy(){
    this.serverElements.splice(0,1)
  }
}
