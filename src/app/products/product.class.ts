import { Vendor } from '../vendors/vendor.class';

export class Product {
    
    id: number = 0;
    partNbr: string = '';
    name: string = '';
    price: number = 0.00;
    unit: string = "each";
    photoPath: string;
    vendorId: number = 0;

    vendor: Vendor = null;

    constructor() { }

}
