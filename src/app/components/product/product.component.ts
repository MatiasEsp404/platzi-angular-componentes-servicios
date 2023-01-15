import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product: Product = {
    id: 0,
    title: "",
    description: "",
    category: "",
    image: "",
    price: 0
  }
  @Output() public addedProduct = new EventEmitter<Product>();

  public addToCart():void{
    this.addedProduct.emit(this.product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
