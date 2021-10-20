import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  usuario: string = 'ruffles';
  seguidores: number = 2434232;
  publicaciones: number = 12;
  siguiendo: number = 32;
  nombre: string = 'Ruffles';
  descripcion: string = 'hola, mundo!';
  constructor() {}

}
