import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { StoreService } from "../../services/store.service";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public myShoppingCart: Product[] = [];
  public total: number = 0;
  public today: Date = new Date();
  public date: Date = new Date(2021, 1, 21);

  constructor(private storeService: StoreService, private productsService: ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    });

  }

  public onAddToShoppingCart(product: Product): void {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
