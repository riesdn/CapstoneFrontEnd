import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];
  message: string = "";

  save(): void {
    this.product.vendorId = Number(this.product.vendorId);
    this.productsvc.update(this.product).subscribe(
      res => {
        console.debug("Changes saved.", res);
        this.router.navigateByUrl(`/products/detail/${this.product.id}`);
      },
      err => {
        console.error("ERROR: product-edit.component.ts, productsvc.update(this.product)", err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl(`/products/detail/${this.product.id}`);
  }

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product = res;
        console.debug("Product being Edited: ", res);
      },
      err => {
        console.error("ERROR: product-edit.component.ts, productsvc.get(id)", err);
      }
    );

    this.vendorsvc.list().subscribe(
      res => {
        this.vendors = res;
        console.debug("Available Vendors to choose from: ", res);
      },
      err => {
        console.error("ERROR: product-edit.component.ts, vendorsvc.list()", err);
      }
    );

  }

}
