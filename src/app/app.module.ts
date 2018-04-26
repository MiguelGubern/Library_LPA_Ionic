import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BooksSearchPage} from "../pages/books-search/books-search";
import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {ChatsPage} from "../pages/chats/chats";
import {TabsPage} from "../pages/tabs/tabs";
import {BookPage} from "../pages/book/book";
import {BooksPage} from "../pages/books/books";
import {CommentsPage} from "../pages/comments/comments";
import { BooksDataProvider } from '../providers/books-data/books-data';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookPage,
    BooksPage,
    BooksSearchPage,
    ChatsPage,
    CommentsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookPage,
    BooksPage,
    BooksSearchPage,
    ChatsPage,
    CommentsPage,
    CommentsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions,
    BooksDataProvider
  ]
})
export class AppModule {}
