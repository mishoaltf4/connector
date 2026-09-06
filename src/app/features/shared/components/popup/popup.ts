import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/outside-click';


@Component({
  selector: 'app-popup',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class Popup {
  public setClasses = input<{ wraperEl?: string }>({});
  public closePopup = output();

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    console.log('hop');
  }

  protected onClose():void{
    this.closePopup.emit();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
