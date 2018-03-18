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
import { DocHistoryComponent } from '../components/doc-history/doc-history';
import { SchedulerComponent } from '../components/scheduler/scheduler';
import { FilePage } from '../pages/file/file';
import { ContactHistoryComponent } from '../components/contact-history/contact-history';
import { TabsPage } from '../pages/tabs/tabs';
import { ConstructionPage } from '../pages/construction/construction';
import { DashboardPage } from '../pages/dashboard/dashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilePage,
    TabsPage,
    ConstructionPage,
    DashboardPage,
    ActiveProcessComponent,
    AllProcessesComponent,
    MapComponent,
    DocHistoryComponent,
    SchedulerComponent,
    ContactHistoryComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilePage,
    TabsPage,
    ConstructionPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjectDummyProvider
  ]
})
export class AppModule {}
