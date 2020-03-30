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

  edit(): void {
    this.router.navigateByUrl(`/users/edit/${this.user.id}`);
  }

  back(): void {
    this.router.navigateByUrl("/users/list");
  }

  delete(): void {
    this.usersvc.remove(this.user).subscribe(
      res => {
        console.debug("User Delete Success! ", res);
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error("ERROR: user-detail.component.ts, usersvc.remove(this.user)", err);
      }
    );
  }

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
