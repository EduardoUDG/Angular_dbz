import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonBallZRoutingModule } from './dragon-ball-z-routing.module';
import { DragonBallZPageComponent } from './components/dragon-ball-zpage/dragon-ball-zpage.component';
import { DragonBallZListComponent } from './components/dragon-ball-zlist/dragon-ball-zlist.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DragonBallZPageComponent,
    DragonBallZListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    DragonBallZRoutingModule,
    FormsModule
  ]
})
export class DragonBallZModule { }
