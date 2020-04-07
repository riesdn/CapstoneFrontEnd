import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/products/product.class';
import { User } from 'src/app/users/user.class';
import { SystemService } from 'src/app/system/system.service';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {
  requestLine: Requestline = new Requestline();
  requestId: number;
  products: Product[] = [];
  loggedInUser: User = this.sys.loggedInUser;

  save(): void {

    this.requestLine.requestId = Number(this.requestId);
    this.requestLine.productId = Number(this.requestLine.productId);
    console.debug("RequestLine: ", this.requestLine);
    this.requestlinesvc.update(this.requestLine).subscribe(
      res => { 
        console.debug("Edit RequestLine successful.", res);
        this.router.navigateByUrl(`/requestlines/list/${this.requestId}`);
      },
      err => {
        console.error("ERROR: requestline-edit.component.ts, requestlinesvc.update(this.requestLine)", err);
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

    let id = this.route.snapshot.params.id;

    this.requestlinesvc.get(id).subscribe(
      res => {
        this.requestLine = res;
        console.debug("Request Line: ", res);
        this.requestId = res.requestId;
      },
      err => { 
        console.error("ERROR: requestline-edit.component.ts, requestlinesvc.get(id)");
      }
    );

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
