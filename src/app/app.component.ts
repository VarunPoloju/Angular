import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverElements = [ {type :'server',name :'test server',content : 'Just a test'}];
  value =10;

  accounts : {name :string,status:string}[] = [];
  constructor(private accountsService : AccountsService){

  }
  ngOnInit(): void {
    this.accounts = this.accountsService.accounts
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
