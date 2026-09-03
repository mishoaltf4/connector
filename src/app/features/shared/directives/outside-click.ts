import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class ClickOutsideDirective{
  readonly clickOutside = output<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as Node;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }
}
