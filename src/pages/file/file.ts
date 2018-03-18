import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Person } from '../../Person';
import { AttachedFile } from '../../AttachedFile';
/**
 * Generated class for the FilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {

  file: AttachedFile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.file = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }

}
