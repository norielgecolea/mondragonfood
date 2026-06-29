export interface Product {
  id: string;
  label: string;
  src: string;
  description: string;
  highlights: string[];
  badgeClass?: string;
  size?: string;
}

export const LAING_PRODUCTS: Product[] = [
  {
    id: 'spicy',
    label: 'Spicy',
    src: 'assets/laing/laing-spicy.jpg',
    badgeClass: 'bg-red-600',
    size: '330g jar',
    description:
      'Traditional Bicolano laing made from dried taro leaves, coconut milk, and chili peppers for a rich, creamy, and spicy flavor.',
    highlights: [
      'Authentic Bicol recipe',
      'Rich coconut flavor',
      'Perfect with steamed rice'
    ],
  },
  {
    id: 'original',
    label: 'Original',
    src: 'assets/laing/laing-original.jpg',
    badgeClass: 'bg-green-700',
    size: '330g jar',
    description:
      'A classic homemade laing with creamy coconut milk and aromatic spices, offering a well-balanced savory taste without the extra heat.',
    highlights: [
      'Creamy & savory',
      'Ready to serve',
      'No artificial preservatives'
    ],
  },
];

export const PUSO_NG_SAGING_PRODUCTS: Product[] = [
  {
    id: 'spicy',
    label: 'Spicy',
    src: 'assets/puso-ng-saging/puso-ng-saging-spicy.jpg',
    badgeClass: 'bg-red-600',
    size: '330g jar',
    description:
      'Tender banana blossom cooked in rich coconut milk and spicy chilies for a deliciously creamy Filipino favorite.',
    highlights: [
      'Made with banana blossom',
      'Spicy coconut sauce',
      'Best served hot'
    ],
  },
  {
    id: 'original',
    label: 'Original',
    src: 'assets/puso-ng-saging/puso-ng-saging-original.jpg',
    badgeClass: 'bg-green-700',
    size: '330g jar',
    description:
      'A comforting blend of banana blossom simmered in creamy coconut milk with traditional seasonings for a mild and satisfying meal.',
    highlights: [
      'Creamy & flavorful',
      'Traditional Filipino recipe',
      'Ready-to-eat'
    ],
  },
];

export const SINANTULAN_PRODUCTS: Product[] = [
  {
    id: 'spicy',
    label: 'Spicy',
    src: 'assets/sinantulan/sinantulan-spicy.jpg',
    badgeClass: 'bg-red-600',
    size: '330g jar',
    description:
      'A spicy version of the beloved sinantulan made from ripe santol, chili peppers, and savory seasonings that add a bold kick to every meal.',
    highlights: [
      'Spicy & tangy',
      'Great with grilled dishes',
      'No artificial preservatives'
    ],
  },
  {
    id: 'original',
    label: 'Original',
    src: 'assets/sinantulan/sinantulan-original.jpg',
    badgeClass: 'bg-green-700',
    size: '330g jar',
    description:
      'The signature Mondragon sinantulan featuring the perfect balance of sweet, tangy, and savory santol flavors.',
    highlights: [
      'Classic family recipe',
      'Balanced flavor',
      'Pairs with any Filipino meal'
    ],
  },
  {
    id: 'pure',
    label: 'Pure',
    src: 'assets/sinantulan/sinantulan-pure.jpg',
    badgeClass: 'bg-amber-500',
    size: '330g jar',
    description:
      'Pure santol goodness with a naturally tangy taste, crafted for those who enjoy the authentic flavor of fresh santol.',
    highlights: [
      '100% santol flavor',
      'Naturally tangy',
      'Versatile condiment'
    ],
  }
];

export const DESSERT_PRODUCTS: Product[] = [
  {
    id: 'jackfruit',
    label: 'Jackfruit',
    src: 'assets/dessert/jack-fruit.jpg',
    size: '320g jar',
    description:
      'Premium ripe jackfruit preserved in light syrup, delivering a naturally sweet and tropical treat for any occasion.',
    highlights: [
      'Made from ripe jackfruit',
      'Perfect dessert topping',
      'Ready to enjoy'
    ],
  },
  {
    id: 'macapuno',
    label: 'Macapuno',
    src: 'assets/dessert/macapuno.jpg',
    size: '320g jar',
    description:
      'Refreshing nata de coco cubes in sweet syrup with a delightfully chewy texture, perfect for desserts and chilled beverages.',
    highlights: [
      'Chewy coconut cubes',
      'Refreshing & sweet',
      'Great for desserts and drinks'
    ],
  },
];