import { Component } from '@angular/core';
//import * as data from '../../assets/feed.json';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //publicaciones: any = this.datos.publicaciones;
  publicaciones = [];
  constructor(private http: HttpClient) {}
}
