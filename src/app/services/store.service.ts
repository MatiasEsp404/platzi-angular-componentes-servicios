import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { BehaviorSubject } from "rxjs"; // "rxjs" implementa todo el patron de Observables

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable(); // subscriptor de myCart que expone un observable

  constructor() { }

  public addProduct(product: Product): void {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart); // Acá le enviamos un valor (myShoppingCart) a los que estén subscritos.
  }

  public getTotal(): number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  public getShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

}
