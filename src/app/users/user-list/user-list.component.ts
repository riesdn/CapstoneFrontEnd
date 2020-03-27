import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = '';

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.usersvc.list().subscribe(
      res => {
        this.users = res;
        console.debug("Users: ", res);
      },
      err => { console.error("ERROR: userlist.component.ts, usersvc.list", err); }
    );

  }

}
