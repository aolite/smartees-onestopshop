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

@NgModule({
  declarations: [
    AppComponent,
    NavHomeComponent,
    FooterHomeComponent
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
