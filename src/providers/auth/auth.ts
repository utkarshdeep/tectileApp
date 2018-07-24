import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AlertController } from 'ionic-angular';
import { of } from 'rxjs';

@Injectable()
export class AuthProvider {


   user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private store: AngularFirestore, private alertCtrl: AlertController) {

    this.user = this.afAuth.authState.switchMap(user => {
      if (user){
        const val = this.store.doc<User>(`users/${user.uid}`).valueChanges()
        console.log('Into it' + val)
        return val
      } else{
          return of(null)
        }
    })
  }

  loginUser(user1: User){

    this.afAuth.auth.signInWithEmailAndPassword(user1.email, user1.password).then( success => {
      console.log(success.user.uid)
    }      
    ).catch(err => {
      console.log(err)
      let alert = this.alertCtrl.create({
        title: 'Login failed',
        message: "Please check your credentials",
        buttons: ['OK'] 
      });
      alert.present();
    });

  }


    ///// Login/Signup //////

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.oAuthLogin(provider);
    }
  
    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUserData(credential.user)
        })
    }
  
    signOut() {
      this.afAuth.auth.signOut()
    }


    private updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<any> = this.store.doc(`users/${user.uid}`);
      const data: User = {
        uid: user.uid,
        email: user.email,
        password: user.password,
        roles: {
          jobworker: true
        }
      }
      return userRef.set(data, { merge: true })
    }
}
