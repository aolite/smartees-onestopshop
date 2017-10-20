import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Welcome to the Open Call!';

  constructor(private router: Router)  { }

  ngOnInit() {
  }

  goProduct(){
    this.router.navigate(['/product']);
  }
}
