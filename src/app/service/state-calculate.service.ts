import { Injectable } from '@angular/core';
import {TotalizatorState} from '../model';


@Injectable({ providedIn: 'root' })
export class CalculateService {

  calculateState(state: TotalizatorState, message: string): TotalizatorState {
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
