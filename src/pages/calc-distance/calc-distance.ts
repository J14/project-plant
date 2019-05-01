import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivityProvider } from '../../providers/activity/activity';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationProvider } from '../../providers/location/location';

/**
 * Generated class for the CalcDistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calc-distance',
  templateUrl: 'calc-distance.html',
})
export class CalcDistancePage {

  public activities;
  public activity;
  public status;
  public content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private activityProvider: ActivityProvider,
    private locationProvider: LocationProvider,
    private geolocation: Geolocation) {
      this.status = "";
      this.content = "";
      this.activityProvider.all().subscribe((data) => {
        this.activities = (data as any).data;
      }, (error) => {
        console.log(error);
      })
  }

  verificarProximidade() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.status = "Verificando proximidade";
      this.content = "";
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
      let body = {
        "location1": this.activity.location.coord.coordinates,
        "location2": [longitude, latitude],
        "threshold": this.activity.threshold
      }
      this.locationProvider.calculateDistance(body).subscribe((data) => {
        let result = (data as any).data;
        if (result.near) {
          this.status = this.activity.content.correct;
          this.content = this.activity.content.description;
        } else {
          this.status = this.activity.content.wrong;
        }
      }, (error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
