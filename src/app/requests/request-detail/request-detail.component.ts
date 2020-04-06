import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/users/user.class';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();
  loggedInUser: User = this.sys.loggedInUser;

  review(): void {

  }

  edit(): void {

  }

  back(): void {
    this.router.navigateByUrl("/requests/forReview");
  }

  delete(): void {

  }

  addLine(): void {

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
        console.debug("Request: ", res);
      },
      err => { 
        console.error("ERROR: request-detail.component.ts, requestsvc.get(id)", err);
      }
    );

  }

}
