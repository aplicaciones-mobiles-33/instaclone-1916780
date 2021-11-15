import { Component, OnInit, Output} from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

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
  editando: boolean = false;

  nuevoUsuario: string;
  nuevaPresentacion: string;

  publicaciones = [] //test

  guardarCambios(){
    if(this.nuevoUsuario){
      let params = {
        usuario: this.nuevoUsuario
      }
      this.db.updateNombreUsuario(params).subscribe(
        res => {
          console.log(res);
        }
      )
    }
    if(this.nuevaPresentacion){
      let paramsPresentacion = {
        bio: this.nuevaPresentacion
      }
      this.db.updateNombreUsuario(paramsPresentacion).subscribe(
        res =>{
          console.log(res);
        }
      )
    }
  }
  toggleEditar(){
    if(this.editando){
      this.guardarCambios();
    }
    this.editando = !this.editando;
  }
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
  obtenerPublicacionesUsuario(){
    this.db.getPublicacionesUsuario();
  }

  ngOnInit(){
    this.obtenerPerfil();
    //this.obtenerPublicacionesUsuario();
  }
}
