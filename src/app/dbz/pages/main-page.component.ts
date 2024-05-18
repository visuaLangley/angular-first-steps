import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //constructor para inyectar el servicio (de dependencias)
  constructor(private DbzService : DbzService){

  }

  get characters() : Character[] {
    return [...this.DbzService.characters]
  }

  OnDeleteCharacter(id : string) : void {
    this.DbzService.deleteCharacterById(id)
  }

  OnNewCharacter(character : Character) : void {
    this.DbzService.addCharacter(character)
  }
}
