import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dragon-ball-zlist.component.html',
  styleUrls: ['./dragon-ball-zlist.component.css']
})
export class DragonBallZListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteById:EventEmitter<string> = new EventEmitter();

  emitCharacterId( characterId?:string ):void {
    if( !characterId ) return;

    this.onDeleteById.emit( characterId );
  }

}
