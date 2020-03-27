import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Users", "/users/list", "Users List Page"),
    new Menu("Vendors", "/vendors/list", "Vendors List Page"),
    new Menu("Products", "/products/list", "Products List Page"),
    new Menu("Requests", "/requests/list", "Requests List Page")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
