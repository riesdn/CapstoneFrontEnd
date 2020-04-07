import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { User } from 'src/app/users/user.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  loggedInUser: User = this.sys.loggedInUser;

  save(): void {
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("New Request: ", res);
        this.router.navigateByUrl(`/requestlines/list/${res.id}`);
      },
      err => {
        console.error("ERROR: request-create.component.ts, requestsvc.create(this.request)");
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
    
    this.request.userId = this.sys.loggedInUser.id;

    console.debug("New Request at load: ", this.request);
  }

}
