import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  dashboardRoot = 'DashboardPage'
  constructionRoot = 'ConstructionPage'

  constructor(public navCtrl: NavController) {}

}
