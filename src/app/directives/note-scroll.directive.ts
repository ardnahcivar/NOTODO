import { Directive, HostListener, EventEmitter, Output, ElementRef, Renderer } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[appNoteScroll]'
})
export class NoteScrollDirective {

  @Output() scrollPosition = new EventEmitter();
  constructor(public el: ElementRef, renderer: Renderer) {
    renderer.listen(el.nativeElement, 'scroll', (e) => {
      const inc: string = document.body.clientHeight + 50 + 'px';
      renderer.setElementStyle(document.body, 'height', inc);
      if ( document.body.scrollHeight + 100 > document.body.clientHeight) {
          window.scrollTo(0, document.body.scrollHeight + 100 - document.body.clientHeight);        
      }else {
          window.scrollTo(0, document.body.scrollHeight - 50);
      }
    }); 
  }

   @HostListener('scroll', ['$event'])
    onScroll(event) {
    }

}
