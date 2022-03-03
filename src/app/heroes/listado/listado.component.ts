import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'BlackWidow'];
  heroeBorrado: string[] = [];

  borrarHeroe(i: number): void{
   const heroeABorrar = this.heroes.splice(i,1);
   this.heroeBorrado = heroeABorrar;
    
  }
}


