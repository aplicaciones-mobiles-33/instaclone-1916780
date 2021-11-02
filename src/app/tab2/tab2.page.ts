import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient) {}
  descripcionFoto: string;
  usuario: string;

  urlFoto: string = '../assets/images/feed/feed1.png';

  datosPublicacion: any = {
    usuario: String,
    caption: String,
    urlFoto: String
  };

  validarDatos(params): void {
    console.log(params);
    this.datosPublicacion = {
      usuario: this.usuario,
      caption: this.descripcionFoto,
      urlFoto: this.urlFoto
    }
    console.log(this.datosPublicacion)
  }

  crearPublicacion(params: {usuario: string; caption: string; urlFoto: string}){
    this.http.post('https://insta-clone-app-1916780-default-rtdb.firebaseio.com/publicaciones.json', params)
    .subscribe(datosRespuesta => {
      console.log(datosRespuesta);
    })
  }
  ngOnInit(){
    this.descripcionFoto = '';
    this.usuario = '';
    this.datosPublicacion = {
      usuario: this.usuario,
      caption: this.descripcionFoto,
      urlFoto: this.urlFoto
    }
    console.log(this.datosPublicacion);
  }
}