import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';

import { GameComponent } from './game.component';
import { SharedModule } from '../../shared/shared.module';

import { AiService } from './services/ai/ai.service';
import { GameboardService } from './services/gamecore/gameboard.service';

@NgModule({
  declarations: [GameComponent, AiService, GameboardService],
  imports: [CommonModule, SharedModule, GameRoutingModule]
})
export class GameModule {}
