import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("User", "/users/list", "/users/", "Users List Page"),
    new Menu("Vendor", "/vendors/list", "/vendors/", "Vendors List Page"),
    new Menu("Product", "/products/list", "/products/", "Products List Page"),
    new Menu("Request", "/requests/list", "/requests/", "Requests List Page")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
