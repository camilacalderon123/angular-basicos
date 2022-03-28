import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Inyeccion de dependencias
  constructor(){}

  nuevo:Personaje={
    nombre: 'Mestro Rochi',
    poder: 10000
  }

}
