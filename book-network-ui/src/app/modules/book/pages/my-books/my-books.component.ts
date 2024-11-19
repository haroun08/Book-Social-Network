import {Component, OnInit} from '@angular/core';
import {BookCardComponent} from "../../components/book-card/book-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {PageResponseBookResponse} from "../../../../services/models/page-response-book-response";
import {BookService} from "../../../../services/services/book.service";
import {Router, RouterLink} from "@angular/router";
import {BookResponse} from "../../../../services/models/book-response";

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [
    BookCardComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit{
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
    this.bookService.findAllBooksByOwner({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books) => {
        this.bookResponse = books;
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
    this.page--;
    this.findAllBooks();
  }

  goToPage(page: number) {
    this.page =page;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number -1;
    this.findAllBooks();
  }
  get isLastPage() : boolean{
    return this.page == this.bookResponse.totalPages as number -1 ;
  }

  archivedBook(book: BookResponse) {

  }

  shareBook(book: BookResponse) {

  }

  editBook(book: BookResponse) {

  }
}
