import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ''): User[] {
    
    if(searchCriteria === "") return users;

    let search = searchCriteria.toLowerCase();

    let relevantUsers: User[] = [];
    for(let user of users) {
      if(
        user.id.toString().includes(search)
        || user.username.toLowerCase().includes(search)
        || user.firstName.toLowerCase().includes(search)
        || user.lastName.toLowerCase().includes(search)
        || (user.phone != null && user.phone.includes(search))
        || (user.email != null && user.email.toLowerCase().includes(search))
      ) {
        relevantUsers.push(user);
      }
    }

    return relevantUsers;
  }

}
