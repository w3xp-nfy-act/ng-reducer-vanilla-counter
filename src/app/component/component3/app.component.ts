import { Component } from '@angular/core';
import { StateReduceService } from '../../service';
import {map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'nfy-root-3rd',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// tslint:disable-next-line: component-class-suffix
export class AppComponent3 {
  title = 'simple-model-for-redux-3rd';
  counter$ = this.reduceService.state$.pipe(
    map (state => state.counter)
  );
  constructor(private reduceService: StateReduceService) {}

  reset() {
    this.reduceService.dispatch('RESET');
  }
}
