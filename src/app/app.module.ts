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
import { GenresDataProvider } from '../providers/genres-data/genres-data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {LoginPage} from "../pages/login/login";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {ConectionErrorPage} from "../pages/conection-error/conection-error";
import {UserProfilePage} from "../pages/user-profile/user-profile";
import { SessionControllerProvider } from '../providers/session-controller/session-controller';
import {UsersPopoverPage} from "../pages/users-popover/users-popover";
import {MyLoansPage} from "../pages/my-loans/my-loans";
import { BookLoansDataProvider } from '../providers/book-loans-data/book-loans-data';
import { ChatsDataProvider } from '../providers/chats-data/chats-data';
import {ChatPage} from "../pages/chat/chat";


export const apiUrl = 'http://192.168.10.2:3000';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookPage,
    BooksPage,
    BooksSearchPage,
    ChatsPage,
    CommentsPage,
    TabsPage,
    LoginPage,
    SignUpPage,
    ConectionErrorPage,
    UserProfilePage,
    UsersPopoverPage,
    MyLoansPage,
    ChatPage
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
    TabsPage,
    LoginPage,
    SignUpPage,
    ConectionErrorPage,
    UserProfilePage,
    UsersPopoverPage,
    MyLoansPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions,
    BooksDataProvider,
    GenresDataProvider,
    AuthServiceProvider,
    SessionControllerProvider,
    BookLoansDataProvider,
    ChatsDataProvider
  ]
})
export class AppModule {}
