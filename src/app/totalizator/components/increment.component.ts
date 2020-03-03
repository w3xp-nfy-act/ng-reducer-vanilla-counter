import { Component, OnInit } from '@angular/core';
import {CalculateReduceService } from '../../store';
import {map } from 'rxjs/operators';
@Component({
  selector: 'app-first',
  template: `
    <h2>{{ title }} works!</h2>
    <div class="counter">
      <span>{{ counter$ | async }}</span>
    </div>
    <button (click)="increment()">
      Increment once
    </button>
  `,
  styles: []
})
export class IncrementComponent implements OnInit {
  title = 'INCREMENT component';

  // tslint:disable-next-line: max-line-length
  constructor(private reduceService: CalculateReduceService) {}

  counter$ = this.reduceService.state$.pipe(
    map (state => state.counter)
  );

  increment() {
    this.reduceService.dispatch('INCREMENT');
  }

  ngOnInit() {}
}
