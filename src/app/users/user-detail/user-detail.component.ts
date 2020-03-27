import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("User: ", res);
      },
      err => {
        console.error("ERROR: user-detail.component.ts, usersvc.get(id)", err);
      }
    );

  }

}
