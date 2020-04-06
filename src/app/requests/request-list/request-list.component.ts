import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  searchCriteria: string = '';

  constructor(
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {

    this.requestsvc.list().subscribe(
      res => {
        this.requests = res;
        console.debug("All Requests: ", res);
      },
      err => {
        console.error("ERROR: request-list.component.ts, requestsvc.list()", err);
      }
    );

  }

}
