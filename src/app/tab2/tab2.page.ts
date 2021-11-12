import { Component } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { SubirFotoService } from '../subir-foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private db: FirebaseDbService, 
    private storage: SubirFotoService) {}
  descripcionFoto: string;
  usuario: string;

  urlFoto: string// '../assets/images/feed/feed1.png';

  datosPublicacion: any = {
    usuario: String,
    caption: String,
    urlFoto: String
  };

  /*
  validarDatos(params): void {
    console.log(params);
    this.datosPublicacion = {
      usuario: this.usuario,
      caption: this.descripcionFoto,
      urlFoto: this.urlFoto
    }
    console.log(this.datosPublicacion)
  }
  */

  crearPublicacion(params: {usuario: string; caption: string; urlFoto: string}){
    this.db.postPublicacion(params).subscribe(
      datos =>{
        console.log(datos)
      }
    )
  }

  onChange(event){
    console.log(event);
    this.urlFoto = event.target.files[0];
    this.storage.subirFoto(this.urlFoto, '');
  }

  ngOnInit(){
    this.descripcionFoto = '';
    this.usuario = '';
    this.urlFoto = '';
    this.datosPublicacion = {
      usuario: this.usuario,
      caption: this.descripcionFoto,
      urlFoto: this.urlFoto
    }
    console.log(this.datosPublicacion);
  }
}