import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLoansPage } from './my-loans';

@NgModule({
  declarations: [
    MyLoansPage,
  ],
  imports: [
    IonicPageModule.forChild(MyLoansPage),
  ],
})
export class MyLoansPageModule {}
