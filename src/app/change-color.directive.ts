// <<<<<<< HEAD
import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
//
interface Options {
  bgColor?: string
}
// =======
// import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';
// >>>>>>> main

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit{

// <<<<<<< HEAD
  @Input('appChangeColor')  appChangeColor: Options = {}
//
// =======
// >>>>>>> main
  element: HTMLElement

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement
  }

  ngAfterViewInit() {
    console.log(this.element)
  }

  @HostListener('click') click () {
// <<<<<<< HEAD
    this.element.style.backgroundColor = this.appChangeColor.bgColor || 'skyblue'
// =======
//     this.element.style.backgroundColor = 'skyblue'
// >>>>>>> main
//     console.log(this.element)
  }

  @HostListener('mouseleave') leave() {
    this.element.style.backgroundColor = ''
  }

}
