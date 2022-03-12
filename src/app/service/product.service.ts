import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private list: Product[] = [
    { id: 1, name: "bread", seoName: "bread", price: 2, active: true},
    { id: 2, name: "cheese", seoName: "cheese", price: 2, active: true},
    { id: 3, name: "egg", seoName: "egg", price: 2, active: false},
    { id: 4, name: "milk", seoName: "milk", price: 2, active: false},
    { id: 5, name: "nutella", seoName: "nutella", price: 2, active: true},
    { id: 6, name: "flour", seoName: "flour", price: 2, active: true},
    { id: 7, name: "pasta", seoName: "pasta", price: 2, active: false}
  ]

  list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.list);

  constructor() {}

  getAll(): void {
    this.list$.next(this.list);
  }

  get(id: number): Observable<Product | undefined> {
    return of( this.list$.value.find( item => item.id === id ));
  }

  getBySeoName(name: string): Observable<Product | undefined> {
    return of( this.list$.value.find( item => item.seoName === name ));
  }

}
