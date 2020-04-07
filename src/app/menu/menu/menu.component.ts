import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';
import { User } from 'src/app/users/user.class';
import { SystemService } from 'src/app/system/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedInUser: User = this.sys.loggedInUser;

  logout(): void {
    this.sys.loggedInUser = null;
    this.router.navigateByUrl("/login");
  }

  menus: Menu[] = [
    new Menu("User", "/users/list", "/users/", "Users List Page"),
    new Menu("Vendor", "/vendors/list", "/vendors/", "Vendors List Page"),
    new Menu("Product", "/products/list", "/products/", "Products List Page"),
    new Menu("Request", "/requests/list", "/requests/", "Requests List Page")
  ];

  constructor(
    private sys: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

}
