import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/outside-click';

@Component({
  selector: 'connector-dropdown',
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  protected isDropdownOpen = signal<boolean>(false);
  public defaultText = input<string>('something');
  public dropdownData: any = input.required();

  protected selectedData = signal<any>(null);

  protected dropdownStateChanger(): void {
    this.isDropdownOpen.update((val) => !val);
  }

  protected selectData(data: any): void {
    this.selectedData.set(data);
  }
}
