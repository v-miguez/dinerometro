import { Component, HostListener } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgRedux } from '@angular-redux/store'
import { IAppState } from '../store'

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ngRedux: NgRedux<IAppState>) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHander(event) {
    // localStorage.removeItem('redux_data')
    // localStorage.setItem('redux_data', JSON.stringify(this.ngRedux.getState()))
  }

  

}
