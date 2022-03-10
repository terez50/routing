import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private list: Product[] = [
    { id: 1, name: "bread", price: 2, active: true},
    { id: 2, name: "cheese", price: 2, active: true},
    { id: 3, name: "egg", price: 2, active: false},
    { id: 4, name: "milk", price: 2, active: false},
    { id: 5, name: "nutella", price: 2, active: true},
    { id: 6, name: "flour", price: 2, active: true},
    { id: 7, name: "pasta", price: 2, active: false}
  ]

  list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.list);

  constructor() {}

  getAll(): void {
    this.list$.next(this.list);
  }
}
