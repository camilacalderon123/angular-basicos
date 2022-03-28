import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {
  
  //Input para recibir info del componente padre
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
    }

    constructor(private dbzSerive:DbzService){}

    agregar( ){
    if(this.nuevo.nombre.trim().length==0){return;}

    this.dbzSerive.agregarPersonajes(this.nuevo);

    this.nuevo = {
        nombre: '',
        poder: 0
      }
   }

  
}
