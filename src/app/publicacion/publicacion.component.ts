import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publicaciones } from '../publicaciones/publicaciones';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {
  idPublicacion: number;
  publicacion: any;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.idPublicacion = this.rutaActiva.snapshot.params.id
    console.log(this.idPublicacion);
  }

}