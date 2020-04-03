import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ''): Product[] {
    
    let search = searchCriteria.toLowerCase();

    let relevantProducts: Product[] = [];

    for(let product of products) {
      if(
        product.id.toString().includes(search)
        || product.partNbr.toLowerCase().includes(search)
        || product.name.toLowerCase().includes(search)
        || product.price.toString().includes(search)
        || (product.photoPath != null && product.photoPath.toLowerCase().includes(search))
        || product.vendor.code.toLowerCase().includes(search)
      ) {
        relevantProducts.push(product);
      }
    }
    
    return relevantProducts;
  }

}
