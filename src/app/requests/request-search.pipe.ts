import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string = ''): Request[] {
    
    let search = searchCriteria.toLowerCase();

    let relevantRequests: Request[] = [];

    for(let request of requests) {
      if(
        request.id.toString().includes(search)
        || request.description.toLowerCase().includes(search)
        || request.status.toLowerCase().includes(search)
        || request.user.username.toLowerCase().includes(search)
        || request.deliveryMode.toLowerCase().includes(search)
        || request.total.toString().includes(search)
      ) {
        relevantRequests.push(request);
      }
    }

    return relevantRequests;
  }

}
