import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import {AppCarousselComponent} from "./app-caroussel/app-caroussel.component";

@NgModule({
  declarations: [
    AppComponent,
    AppCarousselComponent,
    NavHomeComponent,
    FooterHomeComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
