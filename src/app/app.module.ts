import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectDummyProvider } from '../providers/project-dummy/project-dummy';

import { ActiveProcessComponent } from '../components/active-process/active-process';
import { AllProcessesComponent } from '../components/all-processes/all-processes';
import { MapComponent } from '../components/map/map';
import { GoogleMaps } from '@ionic-native/google-maps';
import { DocHistoryComponent } from '../components/doc-history/doc-history';
import { SchedulerComponent } from '../components/scheduler/scheduler';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActiveProcessComponent,
    AllProcessesComponent,
    MapComponent,
    DocHistoryComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjectDummyProvider
  ]
})
export class AppModule {}
