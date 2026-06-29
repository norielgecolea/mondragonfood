import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  DESSERT_PRODUCTS,
  LAING_PRODUCTS,
  Product,
  PUSO_NG_SAGING_PRODUCTS,
  SINANTULAN_PRODUCTS,
} from '../../data/products.data';
import { SkeletonImageDirective } from '../../shared/skeleton-image.directive';

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  fragment: string;
  products: Product[];
  accentClass: string;
  textClass: string;
  image: string;
  titleClass?: string;
  imageClass?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, RouterLink, SkeletonImageDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly productCategories: ProductCategory[] = [
    {
      id: 'sinantulan',
      title: 'Sinantulan',
      subtitle: 'The perfect partner for every dish.',
      fragment: 'sinantulan',
      products: SINANTULAN_PRODUCTS,
      accentClass: 'from-green-50 to-lime-100',
      textClass: 'text-green-800',
      image: 'assets/sinantulan/sinantulan-original.jpg',
    },
    {
      id: 'puso-ng-saging',
      title: 'Puso ng Saging',
      subtitle: 'Creamy banana blossom classics, ready for the table.',
      fragment: 'puso-ng-saging',
      products: PUSO_NG_SAGING_PRODUCTS,
      accentClass: 'from-emerald-50 to-green-100',
      textClass: 'text-emerald-800',
      image: 'assets/puso-ng-saging/puso-ng-saging-original.jpg',
    },
    {
      id: 'laing',
      title: 'Special Laing',
      subtitle: 'Rich coconut flavor with comforting Bicolano heat.',
      fragment: 'laing',
      products: LAING_PRODUCTS,
      accentClass: 'from-lime-50 to-emerald-100',
      textClass: 'text-lime-800',
      image: 'assets/laing/laing-original.jpg',
    },
    {
      id: 'dessert',
      title: 'Desserts',
      subtitle: 'Naturally delicious sweets for every season.',
      fragment: 'dessert',
      products: DESSERT_PRODUCTS,
      accentClass: 'from-amber-50 to-lime-100',
      textClass: 'text-amber-800',
      image: 'assets/dessert/jack-fruit.jpg',
      titleClass: 'tagline-cursive normal-case',
      imageClass: 'object-top',
    },
  ];

  readonly featuredProducts = [
    SINANTULAN_PRODUCTS[0],
    SINANTULAN_PRODUCTS[1],
    LAING_PRODUCTS[0],
    PUSO_NG_SAGING_PRODUCTS[1],
    DESSERT_PRODUCTS[0],
  ];

  readonly proofPoints = [
    { value: '4', label: 'product families' },
    { value: '9', label: 'bottled favorites' },
    { value: '2000', label: 'serving Filipino tables' },
  ];

  enterDelayClass(index: number, base = 4): string {
    const step = Math.min(base + index, 8);
    return `enter-delay-${step}`;
  }
}
