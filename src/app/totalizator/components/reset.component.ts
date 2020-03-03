import { Component, OnInit } from '@angular/core';
import { CalculateReduceService } from '../../store';
import {map,  } from 'rxjs/operators';

@Component({
  selector: 'app-third',
  template: `
    <h3>{{ title }} works!</h3>
    <div class="counter">
      <span>{{ counter$ | async }}</span>
    </div>
    <button (click)="reset()">
      Reset state
    </button>
  `,
  styles: []
})

export class ResetComponent implements OnInit {
  title = 'RESET component';

  constructor(private reduceService: CalculateReduceService) {}

  counter$ = this.reduceService.state$.pipe(
    map (state => state.counter)
  );
  
  reset() {
    this.reduceService.dispatch('RESET');
  }

  ngOnInit() {
  }

}
