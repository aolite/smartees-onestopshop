import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {AppComponent} from '../app.component';
import {ProductComponent} from "../product/product.component";
import {HomeComponent} from "../home/home.component";


const appRoutes: Routes = [
  { path: 'onestopshop',        component: HomeComponent },
  { path: 'product',            component: ProductComponent},
  { path: '',   redirectTo: 'onestopshop', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }

