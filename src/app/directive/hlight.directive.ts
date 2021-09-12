import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHlight]'
})
export class HlightDirective {
  @HostBinding('style.background-color')backColor : string;
   constructor(){
     this.backColor = 'red';
   }

    //constructor(private el: ElementRef){
      //el.nativeElement.style.backgroundcolor= 'yelow';
  //}

  @HostListener('click') doSomething(){
    alert('HostListner Works!!');
  }

  @HostListener('mouseenter') doSomethingElse(){
    console.log('mouse just entered');
  }
  @HostListener('mousemove') doSomethingElseElse(){
    console.log('mouse just move');
  }

}