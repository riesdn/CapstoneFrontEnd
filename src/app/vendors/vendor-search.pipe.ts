import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ''): Vendor[] {
    
    if(searchCriteria === "") return vendors;

    let search = searchCriteria.toLowerCase();

    let relevantVendors: Vendor[] = [];
    for(let vendor of vendors) {
      if(
        vendor.id.toString().includes(search)
        || vendor.code.toLowerCase().includes(search)
        || vendor.name.toLowerCase().includes(search)
        || vendor.address.toLowerCase().includes(search)
        || vendor.city.toLowerCase().includes(search)
        || vendor.state.toLowerCase().includes(search)
        || vendor.zip.includes(search)
        || (vendor.phone != null && vendor.phone.includes(search))
        || (vendor.email != null && vendor.email.toLowerCase().includes(search))
      ) {
        relevantVendors.push(vendor);
      }
    }
    
    return relevantVendors;
  }

}
