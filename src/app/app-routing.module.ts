import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {path: 'introduction', component: IntroductionComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'booklist', component: BookListComponent},
  {path: '', redirectTo: 'introduction', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
