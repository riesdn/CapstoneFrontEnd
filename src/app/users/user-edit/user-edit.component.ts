import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  save(): void {

  }

  cancel(): void {
    let prev = this.route.snapshot;
    console.log(prev);
  }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("User getting edited: ", res);
      },
      err => { console.error("ERROR: user-edit.component.ts, usersvc.get(id)", err); }
    );

  }

}
