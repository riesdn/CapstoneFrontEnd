import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';
import { UserService } from 'src/app/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: string = '';

  login(): void {
    this.message = '';
    this.usersvc.login(this.username, this.password).subscribe(
      res => {
        if(res != null) {
          this.sys.loggedInUser = res;
          console.debug("Loggin In User: ", res);
          this.router.navigateByUrl("/requests/list");
        } else {
          console.warn("Username or Password incorrect!")
          this.message = "Incorrect username or password.";
        }
      },
      err => {
        console.error("ERROR: login.component.ts, usersvc.login(this.username, this.password)", err);
        console.debug("Loggin In User: ", this.sys.loggedInUser);
        this.message = "Internal Server error. Please try again.";
      }
    );
  }

  constructor(
    private sys: SystemService, 
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
