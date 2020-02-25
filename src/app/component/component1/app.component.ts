import { Component, OnInit } from '@angular/core';
import {StateReduceService } from '../../service';
import {map } from 'rxjs/operators';
import {CalculateService} from '../../service/state-calculate.service';

@Component({
  selector: 'nfy-root-1st',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// tslint:disable-next-line: component-class-suffix
export class AppComponent1 implements OnInit {
  title = 'simple-model-for-redux-1st';
  counter$ = this.reduceService.state$.pipe(
    map (state => state.counter)
  );

  // tslint:disable-next-line: max-line-length
  constructor(private reduceService: StateReduceService, private calculateStateService: CalculateService) {}

  increment() {
    this.reduceService.dispatch('INCREMENT');
  }

  ngOnInit() {
    console.log('Deterministic state changes');

    /*
      In JavaScript the method Array.reduce() exists. Its task is to reduce an array
      to a single value by executing a callback for each value.
    */

    // Example reduce array
    console.log('Example reduce array');
    const values = [1, 2, 3, 4];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const result1 = values.reduce(reducer, 0);
    console.log('Reducer function - array: ' + result1);

    /*
      The signature of our previously outsourced functions already corresponds to the callbacks
      that are also used for Array.reduce(). We can therefore calculate our state as follows.

      The most important thing is that the reducer function is "pure".
      It therefore always delivers the same output for the same input values.
    */

    // Example reduce messages
    console.log('Example reduce messages');
    const initialState = {
      counter: 0,
      anotherProperty: 'foobar'
      };

    const messages = [ 'INCREMENT' , 'DECREMENT' , 'INCREMENT', 'INCREMENT', 'INCREMENT' ];
    const result2 = messages.reduce(this.calculateStateService.calculateState, initialState);
    console.log('Reducer function - messages: ' + result2.counter);
  }
}
