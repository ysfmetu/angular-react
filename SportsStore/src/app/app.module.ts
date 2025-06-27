import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreComponent} from "./components/store/store.component";
import {ProductRepository} from "./model/productRepository";
import {StaticDataSource} from "./model/StaticDataSource";


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
