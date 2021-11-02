import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
//import * as data from '../../assets/feed.json';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {
  //_filtrarPublicacion: number;
  //publicacion: any;
  //usuario: any;
  //datos: any = data;
  publicacionId: any;
  //publicaciones: any = this.datos.publicaciones;
  //detallePublicacion: any;

  volver(): void{
    this._location.back();
  }

  constructor(private rutaActiva: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.rutaActiva.queryParams.subscribe(params => {
      console.log(params);
      this.publicacionId = params.publicacionId;
      console.log(this.publicacionId);
    })
  }
}