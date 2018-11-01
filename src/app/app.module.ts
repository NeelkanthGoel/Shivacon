import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NeelComponent }  from './myneel.component';




@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,NeelComponent],
  bootstrap:    [ NeelComponent ]
})
export class AppModule { }
