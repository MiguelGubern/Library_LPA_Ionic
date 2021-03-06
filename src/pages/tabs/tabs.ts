import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {BooksSearchPage} from "../books-search/books-search";
import {BooksPage} from "../books/books";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = BooksPage;
  tab3 = BooksSearchPage;

  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(private nativePageTransitions: NativePageTransitions) {
  }

tabBadge
  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e):void {
    let options: NativeTransitionOptions = {
      direction:this.getAnimationDirection(e.index),
      duration: 250,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 20,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }

}
