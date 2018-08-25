import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkLocationPage } from './mark-location';

@NgModule({
  declarations: [
    MarkLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkLocationPage),
  ],
})
export class MarkLocationPageModule {}
