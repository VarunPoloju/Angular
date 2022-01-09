import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{


  @Input() defaultColor : string = 'transparent';
  @Input() highLigtcolor : string = 'yellow'

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private renderer : Renderer2,private elementref : ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'red')
  }

  @HostListener('mouseover') mouseover(){
    // this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'red')
    this.backgroundColor = this.highLigtcolor;
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementref.nativeElement , 'backgroundColor', 'yellow')
    this.backgroundColor = this.defaultColor

  }
}
