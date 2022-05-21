import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DetailsOrder, Order } from '../interfaces/order.interface'
import { Store } from '../interfaces/store.interface'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private readonly apiURL = 'http://localhost:3000'
  constructor (private readonly http: HttpClient) { }

  getStores (): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiURL}/stores`)
  }

  saveOrder (order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiURL}/orders`, order)
  }

  saveDatailsOrder (details: DetailsOrder): Observable<DetailsOrder> {
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`, details)
  }
}
