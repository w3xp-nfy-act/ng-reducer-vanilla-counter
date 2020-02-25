import { Component } from '@angular/core';
import { StateReduceService } from '../../service';
import {map } from 'rxjs/operators';

@Component({
  selector: 'nfy-root-2nd',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// tslint:disable-next-line: component-class-suffix
export class AppComponent2 {
  title = 'simple-model-for-redux-2nd';
  counter$ = this.reduceService.state$.pipe(
    map (state => state.counter)
  );
  constructor(private reduceService: StateReduceService) {}

  decrement()
  {
    this.reduceService.dispatch('DECREMENT');
  }
}
