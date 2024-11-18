import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/services/book.service';
import { Router } from '@angular/router';
import { PageResponseBookResponse } from '../../../../services/models/page-response-book-response';
import { NgForOf } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgForOf, BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
  page = 0;
  size = 5;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.bookService.findAllBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books) => {
        if (books && books.content && books.content.length > 0) {
          this.bookResponse = books;
        } else {
          console.warn('No books found');
          this.bookResponse = {}; // or set to a default empty object
        }
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  goToPreviousPage() {

  }

  goToPage(index: number) {

  }

  goToNextPage() {

  }

  goToLastPage() {

  }
  get isLastPage() : boolean{
    return this.page == this.bookResponse.totalPages as number -1 ;
  }

}
