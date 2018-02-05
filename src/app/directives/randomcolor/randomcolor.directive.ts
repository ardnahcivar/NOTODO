import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomcolor]'
})
export class RandomcolorDirective {

  private color: any = ['00BCD5', '0192D5', 'E055A6', 'F5A623', 'E73147', 'A64DF5', '259F94', '925990', '585858'];
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    this.elemRef.nativeElement.style.backgroundColor = '#' + this.color[Math.floor((Math.random() * 9))];
   }



}
