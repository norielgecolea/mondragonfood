import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DESSERT_PRODUCTS, SINANTULAN_PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  readonly sinantulanProducts = SINANTULAN_PRODUCTS;
  readonly dessertProducts = DESSERT_PRODUCTS;
}
