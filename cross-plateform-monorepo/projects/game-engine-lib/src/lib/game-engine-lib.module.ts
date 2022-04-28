import { NgModule } from '@angular/core';
//import { GameEngineLibComponent } from './game-engine-lib.component';
import { BoardComponent } from './components/board/board.component';
import { Piece } from './game-engine-lib.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    BoardComponent,
    Piece
  ],
  imports: [CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class GameEngineLibModule { }
