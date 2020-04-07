import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { User } from 'src/app/users/user.class';
import { SystemService } from 'src/app/system/system.service';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product.class';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestLine: Requestline = new Requestline();
  requestId: number;
  products: Product[] = [];
  loggedInUser: User = this.sys.loggedInUser;

  save(): void {

    this.requestLine.requestId = Number(this.requestId);
    this.requestLine.productId = Number(this.requestLine.productId);
    console.debug("RequestLine: ", this.requestLine);
    this.requestlinesvc.create(this.requestLine).subscribe(
      res => { 
        console.debug("Create RequestLine successful. New Request Line: ", res);
        this.router.navigateByUrl(`/requestlines/list/${this.requestId}`);
      },
      err => {
        console.error("ERROR: requestline-create.component.ts, requestlinesvc.create(this.requestLine)", err);
      }
    );

  } 

  cancel(): void {
    this.router.navigateByUrl(`/requestlines/list/${this.requestId}`);  
  }

  constructor(
    private sys: SystemService,
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.requestId = this.route.snapshot.params.requestId;
    console.debug("RequestId: ", this.requestId);

    this.productsvc.list().subscribe(
      res => {
        this.products = res;
        console.debug("List of available products:", res);
      },
      err => {
        console.error("ERROR: requestline-create.component.ts, productsvc.list()", err);
      }
    );

  }

}
