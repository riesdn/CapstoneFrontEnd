import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestlineSearch'
})
export class RequestlineSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
