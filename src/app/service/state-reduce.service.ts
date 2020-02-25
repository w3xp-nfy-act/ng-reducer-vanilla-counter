import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalculateService } from './state-calculate.service';
import { startWith, scan, shareReplay } from 'rxjs/operators';

export interface MyState {
  counter: number;
  anotherProperty: string;
}

@Injectable({ providedIn: 'root' })
export class StateReduceService {

  private messages$ = new Subject<string>();

  private initialState = {
    counter: 0,
    anotherProperty: ' foobar '
  };

  constructor(private calculateStateService: CalculateService) { }

  state$ = this.messages$.pipe(
    startWith('INIT'),
    scan(this.calculateStateService.calculateState, this.initialState),
    shareReplay(1)
  );

  /*
    The relevant difference to a method call is the decoupling:
    The system is free to react to a message or ignore it.
  */

  // The calculation of the state is outsourced (decoupling).
  dispatch(message: string) {
    this.messages$.next(message);
  }

}
