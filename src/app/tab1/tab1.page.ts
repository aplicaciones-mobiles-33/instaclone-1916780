import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
//import * as data from '../../assets/feed.json';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //publicaciones: any = this.datos.publicaciones;
  publicaciones = [];
  constructor(private http: HttpClient) {}

  cargarFeed(){
    this.http.get('https://insta-clone-app-1916780-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(
        responseData => {
          for(const key in responseData){
            this.publicaciones.push({...responseData[key], key});
          }
          return this.publicaciones;
        }
      )
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }
  ngOnInit(){
    this.cargarFeed();
  }
}
