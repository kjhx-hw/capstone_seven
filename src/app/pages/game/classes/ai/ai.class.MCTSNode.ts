import { Owner } from '../../enums/game.enums';
import { CoreLogic } from '../../util/core-logic.util';
import { GameBoard } from '../gamecore/game.class.GameBoard';
import { State } from './ai.class.State';


export class Tree{
  root:MCTSNode;

  getRoot():MCTSNode{
    return this.root;
  }

  setRoot(newRoot:MCTSNode):void{
    this.root = newRoot;
  }
}

export class MCTSNode {
  state:State;
  parent:MCTSNode | null;
  childArray:Array<MCTSNode>;

  constructor(state:State){
    this.state = state;
    this.parent = null;
    this.childArray = [];
  }

  static copyConstructor(node:MCTSNode):MCTSNode{
    const newNode = new MCTSNode(node.getState().cloneState());
    newNode.parent = node.parent;
    
    newNode.childArray = node.childArray;

    return newNode;
    
  }

  getRandomChildNode():MCTSNode{
    return this.childArray[Math.floor(Math.random() * this.childArray.length)];
  }

  getChildWithMaxScore():MCTSNode{
    let maxChild = this.childArray[0];
    let maxScore = this.childArray[0].getState().getWinScore();

    for(let i = 0; i < this.childArray.length;i++){
      const tempScore = this.childArray[i].getState().getWinScore();
      if(tempScore > maxScore){
        maxScore = tempScore;
        maxChild = this.childArray[i];
      }
    }

    return maxChild;
  }

  getState():State{
    return this.state;
  }

  getChildArray():Array<MCTSNode>{
    return this.childArray;
  }

  getParent():MCTSNode|null{
    return this.parent;
  }

  setParent(node:MCTSNode):void{
    this.parent = node;
  }
}