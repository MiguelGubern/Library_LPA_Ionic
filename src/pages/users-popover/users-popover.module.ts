import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPopoverPage } from './users-popover';

@NgModule({
  declarations: [
    UsersPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPopoverPage),
  ],
})
export class UsersPopoverPageModule {}
