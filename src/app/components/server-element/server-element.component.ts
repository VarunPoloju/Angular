import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation :ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
 @Input('hello') element : {type :String,name :String,content : String};
  constructor() { }

  ngOnInit(): void {
  }

}
