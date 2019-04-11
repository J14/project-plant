import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcDistancePage } from './calc-distance';

@NgModule({
  declarations: [
    CalcDistancePage,
  ],
  imports: [
    IonicPageModule.forChild(CalcDistancePage),
  ],
})
export class CalcDistancePageModule {}
