import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Perfil } from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  constructor(private db: FirebaseDbService) {
  }
  perfil = {
    bio: '',
    nombre: '', 
    seguidores: '',
    siguiendo: ''
  }
  publicaciones = 0
  obtenerPerfil(): void{
    this.db.getPerfilUsuario().subscribe(
      respuesta => {
        console.log('respuesta')
        console.log(respuesta);
        this.perfil['bio'] = respuesta['bio']
        this.perfil['nombre'] = respuesta['nombre']
        this.perfil['seguidores'] = respuesta['seguidores']
        this.perfil['siguiendo'] = respuesta['siguiendo']
      }
    )
  }

  /*
  obtenerPublicaciones(){
    this.db.getPublicaciones().subscribe(res => {
      console.log(res);
    })
  }
  */

  ngOnInit(){
    this.obtenerPerfil();
    //this.obtenerPublicaciones();
  }
}
