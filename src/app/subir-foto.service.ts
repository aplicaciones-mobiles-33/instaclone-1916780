import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class SubirFotoService {

  constructor(private storage: AngularFireStorage) { }
  subirFoto(nombre, datos){
    return this.storage.upload(nombre, datos)
  }
}
