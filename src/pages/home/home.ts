import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { AssignmentPage } from '../assignment/assignment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {  
  }

  checkStatus(){
    this.navCtrl.push(StatusPage);
  }

  goToAssignment(){
    this.navCtrl.push(AssignmentPage);
  }

}
