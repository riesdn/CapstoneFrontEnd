import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchCriteria: string = '';

  constructor(
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.productsvc.list().subscribe(
      res => {
        this.products = res;
        console.debug("Product: ", res);
      },
      err => {
        console.error("ERROR: product-list.component.ts, productsvc.list()", err);
      }
    );

  }

}
