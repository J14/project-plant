import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';
import { AuthorshipPage } from '../pages/authorship/authorship';
import { MarkLocationPage } from '../pages/mark-location/mark-location';
import { ContentPage } from '../pages/content/content';
import { ActivityPage } from '../pages/activity/activity';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { ContentsProvider } from '../providers/contents/contents';
import { HttpClientModule } from '@angular/common/http';
import { LocationProvider } from '../providers/location/location';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPage,
    AuthorshipPage,
    MarkLocationPage,
    ContentPage,
    ActivityPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationPage,
    AuthorshipPage,
    MarkLocationPage,
    ContentPage,
    ActivityPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContentsProvider,
    LocationProvider
  ]
})
export class AppModule {}
