import { Component, computed, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  imports: [CommonModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator {
  public dataMaxLength = input.required<number>();
  public dataPerPage = input.required<number>();
  public currentPage = signal<number>(1);
  public currentPageChange = output<number>()

  public totalPages = computed(() => Math.ceil(this.dataMaxLength() / this.dataPerPage()));

  protected selectPage(page: number){
    this.currentPage.set(page);
    this.currentPageChange.emit(this.currentPage());
  }

  protected nextPage(): void {
    if(this.currentPage() !== this.totalPages()){
      this.currentPage.update((val) => val + 1);
      this.currentPageChange.emit(this.currentPage());
      console.log("holla");
    }
    console.log(this.currentPage());
  }

  protected prevPage(): void {
    if(this.currentPage() !== 1){
      this.currentPage.update((val) => val - 1);
      this.currentPageChange.emit(this.currentPage());
    }
    console.log(this.currentPage());
  }
}
