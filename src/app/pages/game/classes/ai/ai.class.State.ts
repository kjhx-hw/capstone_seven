import { GameBoard } from '../gamecore/game.class.GameBoard';
import { Player } from '../../classes/gamecore/game.class.Player';
import { CoreLogic } from '../../util/core-logic.util';

export class State {
    
  moveHistory:string[];
  gameBoard:GameBoard;
  currentPlayer:number;
  player1:Player;
  player2:Player;

  inInitialMoves:boolean;

  tilesBeingChecked:number[];

  

  constructor(moveHistory:string[], gameBoard:GameBoard, player:number, player1:Player, player2:Player, inInitialMoves:boolean) {
    this.moveHistory = moveHistory.slice();
    this.gameBoard = gameBoard;
    this.currentPlayer = player;
    
    this.player1 = CoreLogic.clonePlayer(player1);
    this.player2 = CoreLogic.clonePlayer(player2);
    //this.player1 = player1;
    //this.player2 = player2;
    this.inInitialMoves = inInitialMoves;
    this.tilesBeingChecked = [];
  }

  isPlayer(player:number):boolean {
    return (player === this.currentPlayer);
  }

  hash():string {
    return JSON.stringify(this.moveHistory);
  }



}