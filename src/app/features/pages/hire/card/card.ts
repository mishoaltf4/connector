import { Component, input, signal } from '@angular/core';
import { ProfileCard } from '../hire';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  public profileData = input.required<ProfileCard>()
  protected isFavorite = signal<boolean>(false);

  protected updateFavorite():void{
    this.isFavorite.update((val) => !val);
  }
}
