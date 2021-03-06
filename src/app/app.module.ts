import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RestDemoComponent } from './rest-demo/rest-demo.component';
import { TestGroundComponent } from './test-ground/test-ground.component';
import { TestGroundChildComponent } from './test-ground/test-ground-child/test-ground-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    RestDemoComponent,
    TestGroundComponent,
    TestGroundChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
