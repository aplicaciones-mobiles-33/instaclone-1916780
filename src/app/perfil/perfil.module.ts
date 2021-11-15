import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { IonicModule } from '@ionic/angular';
import { PublicacionesModule } from '../publicaciones/publicaciones.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule, 
    IonicModule, 
    FormsModule,
    PublicacionesModule
  ],
  exports: [PerfilComponent]
})
export class PerfilModule { }
