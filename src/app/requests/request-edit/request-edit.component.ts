import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { Request } from '../request.class';
import { User } from 'src/app/users/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = new Request();
  loggedInUser: User = this.sys.loggedInUser;

  save(): void {
    this.requestsvc.update(this.request).subscribe(
      res => {
        console.debug("Request edit successful!", res);
        this.router.navigateByUrl(`/requests/detail/${this.request.id}`);
      },
      err => {
        console.error("ERROR: request-edit.component.ts, requestsvc.update(this.request)", err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl("/requests/forReview");
  }

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id).subscribe(
      res => {
        this.request = res;
        console.debug("Request being edited: ", res);
      },
      err => {
        console.error("ERROR: request-edit.component.ts, requestsvc.get(id)", err);
      }
    );

  }

}
