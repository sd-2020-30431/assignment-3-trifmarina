import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRepchange]'
})
export class RepchangeDirective {

  constructor(private el:ElementRef,
              private renderer: Renderer2) {
    //renderer.
    //el.nativeElement.style.backgroundColor = 'green';
  }


  @Input('appRepchange') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
