import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { AuthorshipPage } from '../authorship/authorship';
import { CalcDistancePage } from '../calc-distance/calc-distance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navegar(pagina) {
    if (pagina === 'localizacao') {
      this.navCtrl.push(LocationPage);
    } else if (pagina === 'autoria') {
      this.navCtrl.push(AuthorshipPage);
    } else if (pagina === 'distance') {
      this.navCtrl.push(CalcDistancePage);
    }
  }

}
