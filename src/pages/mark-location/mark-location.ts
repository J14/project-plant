import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocationProvider } from '../../providers/location/location';

@IonicPage()
@Component({
  selector: 'page-mark-location',
  templateUrl: 'mark-location.html',
})
export class MarkLocationPage {

  public name: string;
  public description: string;
  public latitude: number;
  public longitude: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private location: LocationProvider) {
      this.storage.get('latitude').then((lat) => {
        this.latitude = lat;
      });
      this.storage.get('longitude').then((long) => {
        this.longitude = long;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkLocationPage');
  }

  form() {
    let content = {
      'name': this.name,
      'description': this.description,
      'coord': [this.longitude, this.latitude]
    }

    this.location.create(content);
  }

}
