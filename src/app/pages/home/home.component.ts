import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DESSERT_PRODUCTS, SINANTULAN_PRODUCTS } from '../../data/products.data';
import { SkeletonImageDirective } from '../../shared/skeleton-image.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SkeletonImageDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly sinantulanProducts = SINANTULAN_PRODUCTS;
  readonly dessertProducts = DESSERT_PRODUCTS;

  enterDelayClass(index: number, base = 4): string {
    const step = Math.min(base + index, 8);
    return `enter-delay-${step}`;
  }
}


