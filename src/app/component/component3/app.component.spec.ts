import { TestBed, async } from '@angular/core/testing';
import { AppComponent3 } from './app.component';

describe('AppComponent3', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent3
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent3);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'simple-model-for-redux-3rd'`, () => {
    const fixture = TestBed.createComponent(AppComponent3);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('simple-model-for-redux-3rd');
  });
});
