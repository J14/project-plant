import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorshipPage } from './authorship';

@NgModule({
  declarations: [
    AuthorshipPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorshipPage),
  ],
})
export class AuthorshipPageModule {}
