import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent1, AppComponent2, AppComponent3 } from './component';

@NgModule({
  declarations: [
    AppComponent1,
    AppComponent2,
    AppComponent3
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent1]
})
export class AppModule { }
