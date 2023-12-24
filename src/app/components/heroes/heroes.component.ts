import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Heroe[] = [];
  buscar: string = '';

  constructor(private _heroeService: HeroesService) {

  }
  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }

  buscarHeroes() {
    const busquedaMinuscula = this.buscar.trim().toLowerCase();
    if (busquedaMinuscula === '') {
      this.heroes = this._heroeService.getHeroes();
    }
    else {
      this.heroes = this._heroeService.getHeroes().filter(
        heroe => heroe.nombre.toLowerCase().includes(busquedaMinuscula));
    }
  }
}