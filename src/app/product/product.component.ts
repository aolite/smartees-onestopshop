import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Bridging Light to your product";
  subtitle = "with OLED and novel lighting";

  constructor() { }

  ngOnInit() {
  }

}
