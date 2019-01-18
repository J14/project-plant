import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location/location';
import { ContentsProvider } from '../../providers/contents/contents';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  public title: string;
  public description: string;
  public content: string;
  public location: string;
  public contents;
  public locations;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private locationProvider: LocationProvider,
    private contentProvider: ContentsProvider,
    private activityProvider: ActivityProvider) {
      this.locationProvider.all().subscribe((data) => {
        this.locations = data.data;
      });
      this.contentProvider.all().subscribe((data) => {
        this.contents = data.data;
      });
  }

  form() {
    let content = {
      'title': this.title,
      'description': this.description,
      'content': this.content,
      'location': this.location
    }

    this.activityProvider.create(content);
  }

}
