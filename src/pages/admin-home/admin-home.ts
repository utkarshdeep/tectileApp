import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ContactPage } from '../contact/contact';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';
import { ProfilePage } from '../profile/profile';
import { NotificationPage } from '../notification/notification';
import { SearchPage } from '../search/search';

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  tab1Root = AdminDashboardPage;
  tab2Root = SearchPage;
  tab3Root = NotificationPage;
  tab4Root = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }

}
