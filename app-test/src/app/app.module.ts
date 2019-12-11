import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestTwoComponent } from './test.2/test.2.component';
import { TestThreeComponent } from './test.3/test.3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestTwoComponent,
    TestThreeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
