import {Component, Input, Output} from '@angular/core';
import {BookResponse} from "../../../../services/models/book-response";
import { EventEmitter } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RatingComponent} from "../rating/rating.component";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RatingComponent
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent  {

  private _book: BookResponse = {};
  private _manage = false;
  private _bookCover: string | undefined;

  get bookCover(): string | undefined {
    if (this._book.cover) {
      return 'data:image/jpg;base64,' + this._book.cover
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800';
  }

  get book(): BookResponse {
    return this._book;
  }

  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }


  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  // @ts-ignore
  @Output() private share: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  // @ts-ignore
  @Output() private archive: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  // @ts-ignore
  @Output() private addToWaitingList: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  // @ts-ignore
  @Output() private borrow: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  // @ts-ignore
  @Output() private edit: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  // @ts-ignore
  @Output() private details: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();

  onShare() {
    // @ts-ignore
    this.share.emit(this._book);
  }

  onArchive() {
    // @ts-ignore
    this.archive.emit(this._book);
  }

  onAddToWaitingList() {
    // @ts-ignore
    this.addToWaitingList.emit(this._book);
  }

  onBorrow() {
    // @ts-ignore
    this.borrow.emit(this._book);
  }

  onEdit() {
    // @ts-ignore
    this.edit.emit(this._book);
  }

  onShowDetails() {
    // @ts-ignore
    this.details.emit(this._book);
  }
}
