import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
//import * as data from '../../assets/feed.json';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  constructor(private db: FirebaseDbService) { }

  publicacionesPorUsuario= [];
  publicacionesKey = [];
  nombre = ''
  obtenerNombre(): void{
    this.db.getPerfilUsuario().subscribe(
      respuesta =>{
        this.nombre = respuesta['nombre']
        console.log('Nombre')
        console.log(this.nombre)
      }
    )
  }
  obtenerPublicaciones(): void{
    this.db.getPublicaciones().subscribe(
      res => {
        console.log(res)
        this.publicacionesPorUsuario = res
      }
    );
  }

  ngOnInit() {
    this.obtenerNombre();
    this.obtenerPublicaciones();
  }

  /*
  publicacionesArreglo: Publicaciones[] = [
    {
      imagen: '../assets/images/Post 1.png',
      id: 1
    },
    {
      imagen: '../assets/images/Post 2.png',
      id: 2
    },
    {
      imagen: '../assets/images/Post 3.png',
      id: 3
    },
    {
      imagen: '../assets/images/Post 4.png',
      id: 4
    },
    {
      imagen: '../assets/images/Post 5.png',
      id: 5
    },
    {
      imagen: '../assets/images/Post 6.png',
      id: 6
    },
    {
      imagen: '../assets/images/Post 7.png',
      id: 7
    },
    {
      imagen: '../assets/images/Post 8.png',
      id: 8
    },
    {
      imagen: '../assets/images/Post 9.png',
      id: 9
    },
    {
      imagen: '../assets/images/Post 10.png',
      id: 10
    },
    {
      imagen: '../assets/images/Post 11.png',
      id: 11
    },
    {
      imagen: '../assets/images/Post 12.png',
      id: 12
    },
  ]
  */

}
