import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {WelcomePage} from '../pages/welcome/welcome'
import {LoginPage} from '../pages/login/login'
import {SignupPage} from '../pages/signup/signup'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AssignmentPage } from '../pages/assignment/assignment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { CalendarModule } from 'ionic3-calendar';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AssignmentPage,
    AdminHomePage,
    AdminDashboardPage,
    NotificationPage,
    SearchPage,
    ProfilePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AssignmentPage,
    AdminHomePage,
    AdminDashboardPage,
    NotificationPage,
    SearchPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
