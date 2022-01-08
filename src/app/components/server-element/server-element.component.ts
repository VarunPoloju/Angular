import { Component, Input, OnInit, ViewEncapsulation,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation :ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit ,OnChanges{
 @Input('hello') element : {type :String,name :String,content : String};
 @Input() name : string
  constructor() { 
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

}
