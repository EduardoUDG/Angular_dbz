import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    if( !this.character.name || !this.character.power )
      return;

    this.onCharacter.emit( this.character );
    this.resetCharacter();
  }

  resetCharacter():void {
   this.character = { name: '', power: 0 }; 
  }

}
