import { Directive, ElementRef, Renderer, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[ccRollover]'
})
export class CcRolloverDirective implements OnInit{

  @Input('ccRollover')
  config = {
    'initial': '#',
    'over': '#'
  };

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementProperty(el.nativeElement, 'src', this.config.initial);
  }

  ngOnInit() {
    this.renderer.setElementProperty(this.el.nativeElement, 'src', this.config.initial);
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setElementProperty(this.el.nativeElement, 'src', this.config.over);
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setElementProperty(this.el.nativeElement, 'src', this.config.initial);
  }

}
