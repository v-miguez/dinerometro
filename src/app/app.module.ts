import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import { IAppState, rootReducer, INITIAL_STATE } from '../store'
import { isDevMode }from'@angular/core';

@NgModule({
  declarations: [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  constructor( ngredux:NgRedux<IAppState>, devTools:DevToolsExtension){
    var enhancers = isDevMode() ? [devTools.enhancer()] :[]


    let estado_inicial = null

    if (localStorage.getItem('redux_data')) {
      estado_inicial = JSON.parse(localStorage.getItem('redux_data'))
    } else {
      estado_inicial = INITIAL_STATE
    }

    // El segundo parámetro es el estado inicial de nuestra store
    ngredux.configureStore(rootReducer, estado_inicial,[],enhancers)
  }

}


















