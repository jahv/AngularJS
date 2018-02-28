import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  @Input('ccCardHover')
  config = {
    querySelector: '.card-text'
  };

  @HostBinding('class.border-primary')
  private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {
    // console.log(el);
    // el.nativeElement.style.backgroundColor = "gray";
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
