import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from './publicaciones.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PublicacionesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [PublicacionesComponent]
})
export class PublicacionesModule {
}
