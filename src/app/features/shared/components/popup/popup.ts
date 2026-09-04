import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class Popup {
  public setClasses = input<{wraperEl?: string}>({});

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
