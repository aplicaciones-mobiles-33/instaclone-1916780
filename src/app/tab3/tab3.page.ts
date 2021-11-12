import { Component, OnInit} from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { PerfilComponent } from '../perfil/perfil.component';
import { SubirFotoService } from '../subir-foto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  perfilUsuario: PerfilComponent
  nombre = '';
  constructor(private db: FirebaseDbService, 
    private storageService: SubirFotoService){
    }
  
  obtenerNombre(): void{
    this.db.getPerfilUsuario().subscribe(
      respuesta =>{
        this.nombre = respuesta['nombre']
        console.log('Nombre')
        console.log(this.nombre)
      }
    )
  }
  
  ngOnInit(): void {
    this.obtenerNombre()
  }
}
