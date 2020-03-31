import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  message: string = '';
  unique: boolean;

  isUnique(username: string): boolean {
    
    this.usersvc.check(username).subscribe(
      res => {
        console.debug("Check Username Result: ", res);
        if(res == null) {
          this.unique = true;
          console.log("Username is unique!");
        } else {
          this.message = `Username ${res.username} already exists!`;
          console.log(`${this.message}`);
          this.unique = false;
        }
      },
      err => {
        console.error("ERROR: create-user.component.ts, usersvc.check(username)", err);
        this.message = "Internal server error. Unable to verify unique username.";
        console.log(`${this.message}`);
        this.unique = false;
      }
    );
    
    console.log(`${this.unique}: check(username) returns true.`);
    return this.unique;
  }

  errorCheck(user: User): boolean {
    if(user.username == null || user.username == "") {
      this.message = "Username is required!";
      console.log(`${this.message}`);
      return false;
    }
    //if(!this.isUnique(user.username)) return false;
    console.log("Error checking moved to next condition.");
    if(user.username.length > 30) {
      this.message = "Username must be 30 characters or less!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.password == null || user.password == "") {
      this.message = "Password is required!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.password.length > 30) {
      this.message = "Password must be 30 characters or less!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.firstName == null || user.firstName == "") {
      this.message = "First Name is required!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.firstName.length > 30) {
      this.message = "First Name must be 30 characters or less!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.lastName == null || user.lastName == "") {
      this.message = "Last Name is required!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.lastName.length > 30) {
      this.message = "Last Name must be 30 characters or less!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.phone != null && user.phone.length > 12) {
      this.message = "Phone Number must be 12 characters or less!";
      console.log(`${this.message}`);
      return false;
    }
    if(user.email != null && user.email.length > 255) {
      this.message = "Email must be less than 255 characters!";
      console.log(`${this.message}`);
      return false;
    }

    console.log("Error Check passed!");
    return true;
  }

  save(): void {
    this.message = "Saving...";
    console.log("save() clicked.")
    if (this.errorCheck(this.user)) {
      console.log("save() passed error check.");
      this.usersvc.create(this.user).subscribe(
        res => {
          console.debug("User Create Success! New User: ", res);
          this.router.navigateByUrl(`/users/detail/${res.id}`);
        },
        err => {
          console.error("ERROR: user-create.component.ts, usersvc.create(this.user)", err);
        }
      );
    } else {
      console.log("save() failed error check.");
      this.message = "Save failed.";
    }

  }

  cancel(): void {
    this.router.navigateByUrl("/users/list");
  }

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
