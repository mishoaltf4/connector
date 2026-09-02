import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  protected isFavorite = signal<boolean>(false);

  protected updateFavorite():void{
    this.isFavorite.update((val) => !val);
  }
}
