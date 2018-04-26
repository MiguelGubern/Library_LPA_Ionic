import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksSearchPage } from './books-search';

@NgModule({
  declarations: [
    BooksSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksSearchPage),
  ],
})
export class BooksSearchPageModule {}
