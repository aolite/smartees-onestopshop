import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {AppComponent} from '../app.component';


const appRoutes: Routes = [
  { path: 'onestopshop',        component: AppComponent },
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

