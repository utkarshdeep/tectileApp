import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  async signup(user: User){
    try{
      const result = await this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      this.presentToast("New user account created. Please login using the credentials.");
      this.navCtrl.push(LoginPage);
    }
    catch(e){
      this.presentToast(e.message+ " Please try again.");
    }
   
  }

}
