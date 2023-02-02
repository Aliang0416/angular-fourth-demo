import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit{

  element: HTMLElement

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement
  }

  ngAfterViewInit() {
    console.log(this.element)
  }

  @HostListener('click') click () {
    this.element.style.backgroundColor = 'skyblue'
    console.log(this.element)
  }

  @HostListener('mouseleave') leave() {
    this.element.style.backgroundColor = ''
  }

}
