import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
//import * as data from '../../assets/feed.json';
import { Location } from '@angular/common';

import { FirebaseDbService } from '../firebase-db.service';
import { Publicacion } from './publicacion';

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

  constructor(
    private rutaActiva: ActivatedRoute, 
    private _location: Location, 
    private db: FirebaseDbService) { }

  publicacion: Publicacion = {
    descripcionPost: '',
    usuario: '',
    urlImagen: ''
  };
  obtenerDetallePublicacion(param): any{
   this.db.getPublicacion(param).subscribe(
     respuesta =>{
       console.log(respuesta)
       this.publicacion['descripcionPost'] = respuesta['caption']
       this.publicacion['usuario'] = respuesta['usuario']
       this.publicacion['urlImagen'] = respuesta['urlFoto']
       console.log(this.publicacion)

     }
   )
  }
  ngOnInit() {
    this.publicacionId = this.rutaActiva.snapshot.params.id;
    console.log(this.publicacionId);
    this.obtenerDetallePublicacion(this.publicacionId);
    /*
    this.rutaActiva.queryParams.subscribe(params => {
      console.log(params);
      this.publicacionId = params.publicacionId;
      console.log(this.publicacionId);
    })
    */
  }
}