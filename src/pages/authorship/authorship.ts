import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content';
import { ActivityPage } from '../activity/activity';

/**
 * Generated class for the AuthorshipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authorship',
  templateUrl: 'authorship.html',
})
export class AuthorshipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorshipPage');
  }

  navegar(pagina) {
    if (pagina === 'conteudo') {
      this.navCtrl.push(ContentPage);
    } else if (pagina === 'atividade') {
      this.navCtrl.push(ActivityPage);
    }
  }

}
