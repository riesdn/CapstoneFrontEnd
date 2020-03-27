import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
