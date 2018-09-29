import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ContentsProvider } from '../../providers/contents/contents';

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
    private contents: ContentsProvider) {
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
      'title': this.name,
      'description': this.description
    }

    this.contents.create(content);
  }

}
