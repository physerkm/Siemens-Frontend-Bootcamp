import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  constructor(private el: ElementRef) { }

  @HostListener("keyup") onkeyup() {
    let vallenght = this.el.nativeElement.value.length;
    console.log(vallenght);
    if (vallenght > 5) {
      this.el.nativeElement.style.backgroundColor = "red";
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }

}
