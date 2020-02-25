import { TestBed, async } from '@angular/core/testing';
import { AppComponent2 } from './app.component';

describe('AppComponent2', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent2
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent2);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'simple-model-for-redux-2nd'`, () => {
    const fixture = TestBed.createComponent(AppComponent2);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('simple-model-for-redux-2nd');
  });
});
