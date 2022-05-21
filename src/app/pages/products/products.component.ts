import { Component, OnInit } from '@angular/core'
import { tap } from 'rxjs/operators'
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service'
import { Product } from './interfaces/product.interface'
import { ProductsService } from './services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[]

  constructor (private readonly productSvc: ProductsService, private readonly shoppingCartSvc: ShoppingCartService) { }

  ngOnInit (): void {
    this.productSvc.getProducts()
      .pipe(
        // eslint-disable-next-line no-return-assign
        tap((products: Product[]) => this.products = products)
      )
      .subscribe()
  }

  addToCart (product: Product): void {
    console.log('Add to cart', product)
    this.shoppingCartSvc.updateCart(product)
  }
}
