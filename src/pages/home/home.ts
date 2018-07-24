import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { AssignmentPage } from '../assignment/assignment';
import { AdminHomePage } from '../admin-home/admin-home';
import { ContactPage } from '../contact/contact';
import { AdminHomePageModule } from '../admin-home/admin-home.module';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: '';
  pages = [];

  //@ViewChild(Nav) nav : Nav;

  constructor(public navCtrl: NavController, private nav: Nav) {  
  }


  ionViewWillEnter(){

    const val = false;

    if(val){
      this.pages = [
        {
          title:'Admin Home', page:AdminHomePage
        }
      ];
      this.openPage(ProfilePage); 
    } else {

      this.pages = [
        {
          title:'Admin Home', page:ContactPage
        }
      ];
      this.openPage(ContactPage);
    }

  }

  openPage(page){
    this.nav.setRoot(page);
  }

  ionViewCanEnter(){

  }

  checkStatus(){
    this.navCtrl.push(StatusPage);
  }

  goToAssignment(){
    this.navCtrl.push(AssignmentPage);
  }

}
