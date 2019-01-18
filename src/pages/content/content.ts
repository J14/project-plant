import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentsProvider } from '../../providers/contents/contents';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  pet = 'description';
  public description: string;
  public correct: string;
  public wrong: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private content: ContentsProvider) {
  }

  form() {
    let content = {
      'description': this.description,
      'correct': this.correct,
      'wrong': this.wrong
    }

    this.content.create(content);
  }

}
