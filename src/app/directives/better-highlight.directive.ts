import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private renderer : Renderer2,private elementref : ElementRef) { }
  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
  ngOnInit() {
      // this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'red')
  }

  @HostListener('mouseover') mouseover(){
    // this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'red')
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'yellow')
    this.backgroundColor = 'grey'

  }
}
