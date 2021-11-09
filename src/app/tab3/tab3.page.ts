import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  /*
  usuario: string = 'ruffles';
  seguidores: number = 2434232;
  publicaciones: number = 12;
  siguiendo: number = 32;
  nombre: string = 'Ruffles';
  descripcion: string = 'hola, mundo!';
  */
  constructor(private http: HttpClient) {}

  bio: string;
  nombre: string;
  seguidores: number;
  siguiendo: number;

  obtenerPerfil(): void{
    this.http.get('https://insta-clone-app-1916780-default-rtdb.firebaseio.com/usuario.json')
    .subscribe(respuesta => {
      console.log(respuesta);
      let res = Object.assign(respuesta);
      this.bio = res.bio;
      this.nombre = respuesta['nombre'];
      this.seguidores = respuesta['seguidores'];
      this.siguiendo = respuesta['siguiendo'];
    })
  }

  obtenerPublicaciones(){
    this.http.get('https://insta-clone-app-1916780-default-rtdb.firebaseio.com/publicaciones.json')
    .subscribe(responseData => {
      console.log(responseData);
    })
  }

  ngOnInit(){
    this.obtenerPerfil();
    this.obtenerPublicaciones();
  }

}
