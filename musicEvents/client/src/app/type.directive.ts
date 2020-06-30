import { Directive,Input, ElementRef ,OnChanges } from '@angular/core';

@Directive({
  selector: '[appType]'
})
export class TypeDirective {

  @Input()
  type : string;

 el: ElementRef;
   constructor(el: ElementRef) {
     this.el= el;
    }

    ngOnChanges(){

     switch(this.type){
 case 'pop' :
   this.el.nativeElement.style.color = 'purple';
   break;
   case 'rok' :
   this.el.nativeElement.style.color = 'red';
   break;
   case 'tehno' :
   this.el.nativeElement.style.color = 'blue';
   break;
   case 'dance' :
   this.el.nativeElement.style.color = 'black';
   break;
   case 'domaca' :
       this.el.nativeElement.style.color = 'green';
       break;
     }
    }

}
