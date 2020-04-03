import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];
  message: string = '';

  errorCheck(): boolean {
    if(this.product.partNbr.length > 30) {
      this.message += "<br> Part Number must be less than 30 characters.";
      return false;
    }
    return true;
  }

  save(): void {
    this.product.vendorId = Number(this.product.vendorId);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("New Product: ", res);
        this.router.navigateByUrl(`/products/detail/${res.id}`);
      },
      err => {
        console.error("ERROR: product-create.component.ts, productsvc.create(this.product)", err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl("/products/list");
  }

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.vendorsvc.list().subscribe(
      res => {
        this.vendors = res;
        console.debug("Available Vendors to choose from: ", res);
      },
      err => {
        console.error("ERROR: product-create.component.ts, vendorsvc.list()", err);
      }
    );

  }

}
