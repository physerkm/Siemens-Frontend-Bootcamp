import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublisherComponent } from './subject/publisher/publisher.component';
import { Subscriber2Component } from './subject/subscriber2/subscriber2.component';
import { Subscriber1Component } from './subject/subscriber1/subscriber1.component';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    Subscriber2Component,
    Subscriber1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
