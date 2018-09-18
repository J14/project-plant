import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MarkLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mark-location',
  templateUrl: 'mark-location.html',
})
export class MarkLocationPage {

  name: string;
  description: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkLocationPage');
  }

  form() {
    console.log(this.name);
    console.log(this.description);
    this.storage.get('latitude').then((lat) => {
      console.log(lat);
    });
    this.storage.get('longitude').then((long) => {
      console.log(long);
    });
  }

}
