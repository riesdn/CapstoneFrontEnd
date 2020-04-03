import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();

  edit(): void {
    this.router.navigateByUrl(`/products/edit/${this.product.id}`);
  }

  back(): void {
    this.router.navigateByUrl("/products/list");
  }

  delete(): void {
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.debug("Product Delete success.", res);
        this.router.navigateByUrl("/products/list");
      }, 
      err => {
        console.error("ERROR: product-detail.component.ts, productsvc.remove(this.product)", err);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product = res;
        console.debug("Product: ", res);
      },
      err => {
        console.error("ERROR: product-detail.component.ts, productsvc.get(id)", err);
      }
    );

  }

}
