import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  message: string = '';
  unique: boolean;

  save(): void {
    this.message = "Saving...";
    this.vendorsvc.create(this.vendor).subscribe(
      res => {
        console.debug("Vendor Create success!");
        this.router.navigateByUrl(`/vendors/detail/${res.id}`);
      },
      err => {
        console.error("ERROR: vendor-create.component.ts, vendorsvc.create(this.vendor)", err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl("/vendors/list");
  }

  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
