import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { MasterAssignment } from '../../models/MasterAssignment';
import { ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-assignment',
  templateUrl: 'assignment.html',
})
export class AssignmentPage {


 

  master = {} as MasterAssignment;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseDB: AngularFireDatabase, 
    private toastCtrl: ToastController, private formBuilder: FormBuilder) {

      this.masterForm = formBuilder.group({
        date: [''],
        design:[''],
        fabric:[''],
        lotNo:['', Validators.compose([Validators.maxLength(30), Validators.required])],
        masterName:[''],
        set:['', Validators.compose([Validators.maxLength(30), Validators.required])],
        size: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[0-9]+$'), Validators.required])],
      
    });
  }
  masterForm: FormGroup;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentPage');
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

  createMasterAssignment(){
      const master = this.masterForm.value;
    this.firebaseDB.list("/masterAssignment/").push(master);
    this.masterForm.reset();
    this.presentToast("Master Assignment Created");

  }
}
