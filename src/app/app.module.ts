import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionesModule } from './publicaciones/publicaciones.module';

import { HttpClientModule } from '@angular/common/http';
//Firebase App
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'

import {IonicStorageModule} from '@ionic/storage-angular'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, PublicacionesModule, 
    HttpClientModule, AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireStorageModule, AngularFireDatabaseModule,
IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
