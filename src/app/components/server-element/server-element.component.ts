import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 @Input('hello') element : {type :String,name :String,content : String};
  constructor() { }

  ngOnInit(): void {
  }

}