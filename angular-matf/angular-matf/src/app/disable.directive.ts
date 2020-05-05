import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[matfDisable]'
})
export class DisableDirective {

  constructor(element: ElementRef) {
    element.nativeElement.disabled = 'disabled';
   }

}
