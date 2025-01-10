import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OtherComponentModule, TestComponentModule } from 'test-component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestComponentModule,
    OtherComponentModule
    ,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }