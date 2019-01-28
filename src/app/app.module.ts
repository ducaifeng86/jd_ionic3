import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';

import { CategoryPage } from '../pages/category/category';
import { CartPage } from '../pages/cart/cart';
import { HomePage } from '../pages/home/home';
import { MyPage } from '../pages/my/my';
import { TabsPage } from '../pages/tabs/tabs';

<<<<<<< HEAD
import { ProductlistPage } from '../pages/productlist/productlist';
=======
//搜索页面
import { SearchPage } from '../pages/search/search';
>>>>>>> ab2becc89daa791b86b2cf209fb179225483de87

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    CartPage,
    HomePage,
    MyPage,
    TabsPage,
<<<<<<< HEAD
    ProductlistPage
=======
    SearchPage,
>>>>>>> ab2becc89daa791b86b2cf209fb179225483de87
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    //IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '' /*配置返回按钮*/
    })  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    CartPage,
    HomePage,
    MyPage,
    TabsPage,
<<<<<<< HEAD
    ProductlistPage
=======
    SearchPage,
>>>>>>> ab2becc89daa791b86b2cf209fb179225483de87
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServicesProvider,
    StorageProvider
  ]
})
export class AppModule {}
