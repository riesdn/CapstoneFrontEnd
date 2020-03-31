import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    this.vendorsvc.update(this.vendor).subscribe(
      res => {
        console.debug("Vendor Update successful!", res);
        this.router.navigateByUrl(`/vendors/detail/${this.vendor.id}`);
      },
      err => {
        console.error("ERROR: vendor-edit.component.ts, vendorsvc.update(this.vendor)", err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl("/vendors/list");
  }

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
        this.vendor = res;
        console.debug("Vendor getting edited: ", res);
      },
      err => {
        console.error("ERROR: vendor-edit.component.ts, vendorsvc.get(id)", err);
      }
    );

  }

}
