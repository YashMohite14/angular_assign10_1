import { Directive,  ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  public el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.style.color = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.color = 'black';
  }

}
