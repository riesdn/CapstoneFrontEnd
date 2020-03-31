import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], column: string = 'id', asc: boolean = true): any[] {
    
    if(items == null || items.length == 0) return items;

    let sortFunction = (a: any, b: any): number => {
      let x = this.setValue(a[column]);
      let y = this.setValue(b[column]);

      if(x == y) return 0;
      return (x < y) ? -1 : 1;
    };

    return items.sort(sortFunction);
  }

  setValue(colValue: any): any {
    if(colValue == null) return "";
    if(typeof colValue == "number") return colValue;
    return colValue.toString().toLowerCase();
  }

}
