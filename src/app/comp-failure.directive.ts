import { Directive,  ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  public el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.color = 'black';
  }

}
