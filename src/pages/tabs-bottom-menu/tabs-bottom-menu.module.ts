import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsBottomMenuPage } from './tabs-bottom-menu';
import { AdminHomePage } from '../admin-home/admin-home';

@NgModule({
  declarations: [
    TabsBottomMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsBottomMenuPage),
  ],
})
export class TabsBottomMenuPageModule {

  tab1Root = AdminHomePage;
  tab2Root = AdminHomePage;
  tab3Root = AdminHomePage;

}
