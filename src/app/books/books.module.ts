import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookCardComponent} from './component/book-card/book-card.component';
import {BookFormComponent} from './component/book-form/book-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksPanelComponent} from './component/books-panel/books-panel.component';
import {SharedModule} from '../shared/shared.module';
import booksData from '../books/model/books.data';
import {HttpClientModule} from '@angular/common/http';
import {HttpBooksService} from "./service/http-books.service";
import { BooksSearchComponent } from './component/books-search/books-search.component';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent,
    BooksSearchComponent
  ],
  exports: [
    BooksPanelComponent
  ],
  providers: [
    {
      provide: 'BooksService',
      useClass: HttpBooksService
    },
  /*{
      provide: 'BooksService',
      useFactory: booksServiceFactory,
      deps: ['BooksData']
    },*/
    {
      provide: 'BooksData',
      useValue: booksData
    }
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BooksModule {
}

/*
function booksServiceFactory(booksData: BookModel[]) {
  return new ArrayBooksService(booksData);
}
*/
