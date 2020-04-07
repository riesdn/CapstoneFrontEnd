import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system/system.service';
import { User } from 'src/app/users/user.class';

@Component({
  selector: 'app-review-requests',
  templateUrl: './review-requests.component.html',
  styleUrls: ['./review-requests.component.css']
})
export class ReviewRequestsComponent implements OnInit {

  requests: Request[] = [];
  loggedInUser: User = this.sys.loggedInUser;
  searchCriteria: string = '';
  message: string = '';

  approve(request: Request): void {
    this.requestsvc.approve(request).subscribe(
      res => { 
        console.debug("Request approved!", res);
        this.refresh();
      },
      err => {
        console.error("ERROR: review-requests.component.ts, requestsvc.approve(request)", err);
      }
    );
  }

  reject(): void {

  }

  refresh(): void {
    this.requestsvc.reviewList().subscribe(
      res => {
        this.requests = res;
        console.debug("Requests to Review: ", res);
      },
      err => {
        console.error("ERROR: review-requests.component.ts, requestsvc.reviewList()", err);
      }
    );
  }

  constructor(
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {

    if(this.sys.loggedInUser != null) {
      this.refresh();
    } else {
      this.message = "Please log in to see Requests ready to review.";
    }
  }

}
