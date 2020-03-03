import { Injectable } from '@angular/core';
import {ICalculateState} from '..';

@Injectable({ providedIn: 'root' })
export class CalculateActions {

  calculateState(state: ICalculateState, message: string): ICalculateState {
    switch (message) {
      case 'INCREMENT': {
        return {
          ...state,
          counter: state.counter + 1
        };
      }
      case 'DECREMENT': {
        return {
          ...state,
          counter: state.counter - 1
        };
      }
      case 'RESET': {
        return { ...state, counter: 0 };
      }
      default: return state;
    }
  }
}