import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() featureSelected = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  onSelect(data :string){
    this.featureSelected.emit(data);
  }
}
