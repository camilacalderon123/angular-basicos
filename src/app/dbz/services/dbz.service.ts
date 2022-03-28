import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
    //guion bajo para identificar que es propiedad privada
  private _personajes:Personaje[]=[
    {
      nombre: 'Goku',
      poder: 60350
    },
    {
       nombre: 'Vegetta',
       poder: 50200
     }    
    ];

    get personajes(): Personaje[]{
      return this._personajes;
    }

    constructor(){}

    agregarPersonajes(personajeAgregar:Personaje){
      this._personajes.push(personajeAgregar);
    }

}