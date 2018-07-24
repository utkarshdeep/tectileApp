import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDashboardPage } from './admin-dashboard';

@NgModule({
  declarations: [
    AdminDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDashboardPage),
  ],
})
export class AdminDashboardPageModule {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}
}
