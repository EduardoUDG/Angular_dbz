import { Component, OnInit } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dragon-ball-zpage',
  templateUrl: './dragon-ball-zpage.component.html',
  styleUrls: ['./dragon-ball-zpage.component.css']
})
export class DragonBallZPageComponent {

  constructor( private _dbzService: DbzService ) {}

  deleteCharacter( id:string ):void {
    this._dbzService.deleteCharacterById( id );
  }

  addCharacter( newCharacter:Character ):void {
    this._dbzService.addCharacter( newCharacter );
  }

  get characters(): Character[] {
    return [ ...this._dbzService.characters ];
  }   

}
