import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup;
  message: string = "";

  constructor(private bookService: BookserviceService, private formBuilder: FormBuilder) { }

  categories = [
    {key: 'Science', text: 'Science'},
    {key: 'Math', text: 'Math'},
    {key: 'Computers', text: 'Computers'},
    {key: 'Cooking', text: 'Cooking'},
    {key: 'Business', text: 'Business'},
  ]

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['Science', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.bookForm.value);
    const book = this.bookForm.value;
    this.message = this.bookService.addBook(book);
    this.bookForm.reset({
      title: null,
      author: null,
      price: 0,
      category: 'Science'
    })
    setTimeout(() => {
      this.message = ""
    }, 3000);
  }



}
