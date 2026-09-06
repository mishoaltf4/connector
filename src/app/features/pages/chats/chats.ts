import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  imports: [],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats {
  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    console.log('hop');
  }
}
