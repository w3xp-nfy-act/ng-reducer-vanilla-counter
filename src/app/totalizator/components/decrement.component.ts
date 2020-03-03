import { Component, OnInit } from '@angular/core';
import { CalculateReduceService } from '../../store';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-second',
  template: `
    <h3>{{ title }} works!</h3>
    <div class="counter">
      <span>{{ counter$ | async }}</span>
    </div>
    <button (click)="decrement()">
      Decrement once
    </button>
  `,
  styles: []
})
export class DecrementComponent implements OnInit {
  title = 'DECREMENT component';

  constructor(private reduceService: CalculateReduceService) {}

  counter$ = this.reduceService.state$.pipe(
    map (state => state.counter)
  );

  decrement()
  {
    this.reduceService.dispatch('DECREMENT');
  }

  ngOnInit() {
  }

}
