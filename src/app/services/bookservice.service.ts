import { Injectable } from '@angular/core';

export interface Book {
  title: string;
  author: string;
  price: number;
  category: string;
}


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  books: Book[] = [];

  constructor() { 
    console.log('Connected to Book Service.')
  }

  addBook(book: Book): string {
    this.books.push(book);
    return "Book added successfully";
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}
