import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[matfHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
    element.nativeElement.style.color = 'gray';
    element.nativeElement.style.padding = '0 5px';
    element.nativeElement.style.borderRadius = '4px';

    element.nativeElement.title = 'highlighted';
  }

}
