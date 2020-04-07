import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { RequestService } from 'src/app/requests/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/requests/request.class';
import { SystemService } from 'src/app/system/system.service';
import { RequestlineService } from '../requestline.service';
import { User } from 'src/app/users/user.class';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  requestId: number;
  request: Request = new Request();
  requestLines: Requestline[] = [];
  searchCriteria: string = '';
  loggedInUser: User = this.sys.loggedInUser;

  refresh(): void {
    this.requestsvc.get(this.requestId).subscribe(
      res => {
        this.request = res;
        console.debug("Request: ", res);
        this.requestLines = res.requestLines;
        console.debug("Requestlines: ", res.requestLines);
      },
      err => {
        console.error("ERROR: requestline-list.component.ts, requestsvc.get(id)", err);
      }
    );
  }

  remove(requestline: Requestline): void {
    this.requestlinesvc.remove(requestline).subscribe(
      res => {
        console.debug("Requestline successfully removed.", res);
        this.refresh();
      },
      err => { 
        console.error("ERROR: requestline-list.component.ts, requestlinesvc.remove(requestline)", err);
      }
    );
  }

  add(): void {
    this.router.navigateByUrl(`/requestlines/create/${this.request.id}`);
  }

  review(): void {
    this.requestsvc.setToReview(this.request).subscribe(
      res => {
        console.debug("Review successfully set to Review!", res);
        this.router.navigateByUrl(`/requests/detail/${this.request.id}`);
      },
      err => {
        console.error("ERROR: requestline-list.component.ts, requestsvc.setToReview(this.request)", err);
      }
    );
  }

  back(): void {
    this.router.navigateByUrl("/requests/forReview");
  }

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {

    this.requestId = this.route.snapshot.params.requestId;
  
    this.refresh();

  }

}
