import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CodeInputModule } from 'angular-code-input';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CodeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
