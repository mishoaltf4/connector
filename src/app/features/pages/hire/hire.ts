import { Component, signal } from '@angular/core';
import {Dropdown} from '../../../shared/dropdown/dropdown';
import {Checkbox} from '../../../shared/checkbox/checkbox';
import {Card} from './card/card';

@Component({
  selector: 'app-hire',
  imports: [Dropdown, Checkbox, Card],
  templateUrl: './hire.html',
  styleUrl: './hire.css',
})
export class Hire {
  public readonly dropdownData = signal<any>([]);
}
