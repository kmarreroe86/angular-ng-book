//import {PriceService} from './service/price.service';
import {IPriceService} from "./services/price.service.interface";
import {MockPriceService} from "./services/price.service.mock";


export class Product {

  service: IPriceService;
  basePrice: number;

  constructor(service: IPriceService, basePrice: number) {
    this.service = service;
    this.basePrice = basePrice;
  }

  totalPrice(state: string): number {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
