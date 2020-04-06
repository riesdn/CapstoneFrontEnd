import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  searchCriteria: string = '';

  constructor(
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {

    this.vendorsvc.list().subscribe(
      res => {
        this.vendors = res;
        console.debug("Vendors: ", res);
      },
      err => {
        console.error("ERROR: vendor-list.component.ts, vendorsvc.list()", err);
      }
    );

  }

}
