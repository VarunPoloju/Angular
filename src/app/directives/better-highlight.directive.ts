import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private renderer : Renderer2,private elementref : ElementRef) { }

  ngOnInit() {
      this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'red')
  }
}
