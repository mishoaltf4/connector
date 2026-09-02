import { Component, signal } from '@angular/core';

@Component({
  selector: 'connector-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  protected isChecked = signal<boolean>(false);

  protected updateChecked(): void{
    this.isChecked.update((val) => !val);
  }
}
