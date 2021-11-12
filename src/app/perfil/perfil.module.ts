import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { IonicModule } from '@ionic/angular';
import { PublicacionesModule } from '../publicaciones/publicaciones.module';



@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule, 
    IonicModule, 
    PublicacionesModule
  ],
  exports: [PerfilComponent]
})
export class PerfilModule { }
