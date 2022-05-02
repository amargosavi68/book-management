import { Component, OnInit } from '@angular/core';
import { Book, BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList!: Book[];

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.bookList = this.bookService.getAllBooks();
  }

}
