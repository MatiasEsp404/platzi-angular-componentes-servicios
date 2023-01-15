import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public activeMenu: boolean = false;
  public counter: number = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  public toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }
}
