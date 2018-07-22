import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular/umd';


@Injectable()
export class AuthProvider {


  // user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router, private alertCtrl: AlertController) {
  }

  loginUser(user: User){

    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then( success => {
      console.log("In this shit!!!!");
    }      
    ).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Login failed',
        message: "Please check your credentials",
        buttons: ['OK'] 
      });
      alert.present();
    });

  //   try{
  //     const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  //     this.navCtrl.push(HomePage);
  //   }
  //   catch(e){
  //     this.presentToast(e.message);
  //   }
  // }

  }
}
