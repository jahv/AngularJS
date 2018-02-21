import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log(el);
    // el.nativeElement.style.backgroundColor = "gray";
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

}
