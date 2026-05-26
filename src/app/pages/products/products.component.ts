import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DESSERT_PRODUCTS, SINANTULAN_PRODUCTS } from '../../data/products.data';
import { SkeletonImageDirective } from '../../shared/skeleton-image.directive';

export type ProductFilter = 'all' | 'sinantulan' | 'dessert';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, SkeletonImageDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly sinantulanProducts = SINANTULAN_PRODUCTS;
  readonly dessertProducts = DESSERT_PRODUCTS;

  activeFilter: ProductFilter = 'all';

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'sinantulan' || fragment === 'dessert') {
        this.activeFilter = fragment;
      }
    });
  }

  setFilter(filter: ProductFilter): void {
    this.activeFilter = filter;
  }

  isFilterActive(filter: ProductFilter): boolean {
    return this.activeFilter === filter;
  }

  filterButtonClass(filter: ProductFilter): string {
    const base = 'rounded-full px-5 py-2.5 text-sm font-semibold transition';
    if (this.isFilterActive(filter)) {
      return `${base} bg-lime-400 text-green-950 hover:bg-lime-300`;
    }
    return `${base} border border-white/40 text-white hover:bg-white/10`;
  }
}
