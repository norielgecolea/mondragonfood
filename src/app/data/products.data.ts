export interface Product {
  id: string;
  label: string;
  src: string;
  description: string;
  highlights: string[];
  badgeClass?: string;
  size?: string;
}

export const SINANTULAN_PRODUCTS: Product[] = [
  {
    id: 'spicy',
    label: 'Spicy',
    src: 'assets/originalspicy.png',
    badgeClass: 'bg-red-600',
    size: '330g jar',
    description:
      'Our boldest sinantulan blend, made with ripe santol, native chilies, and a savory spice mix that wakes up every bite.',
    highlights: ['Medium-hot kick', 'Great with grilled meats', 'No artificial preservatives'],
  },
  {
    id: 'original',
    label: 'Original',
    src: 'assets/original.jpg',
    badgeClass: 'bg-green-700',
    size: '330g jar',
    description:
      'The classic Mondragon recipe — balanced tangy-sweet santol flavor that pairs with almost any Filipino ulam.',
    highlights: ['All-around table staple', 'Tangy & savory profile', 'Family-size friendly'],
  },
  {
    id: 'pure',
    label: 'Pure',
    src: 'assets/originalmilk.jpg',
    badgeClass: 'bg-amber-500',
    size: '330g jar',
    description:
      'A smoother, milder take on sinantulan with a creamy finish — perfect for kids and anyone who prefers gentle heat.',
    highlights: ['Mild & creamy', 'Kid-friendly', 'Soft santol notes'],
  },
  {
    id: 'variants',
    label: 'Other Variants',
    src: 'assets/speciallaing.jpg',
    badgeClass: 'bg-emerald-700',
    size: 'Assorted',
    description:
      'Seasonal and regional specials — limited batches crafted with local ingredients and heirloom family techniques.',
    highlights: ['Limited releases', 'Regional flavors', 'Gift-ready sets'],
  },
];

export const DESSERT_PRODUCTS: Product[] = [
  {
    id: 'jackfruit',
    label: 'Jackfruit',
    src: 'assets/jackfruit.png',
    size: '320g jar',
    description:
      'Golden langka strips preserved in light syrup — naturally sweet, fragrant, and ready to enjoy straight from the jar.',
    highlights: ['Ripe jackfruit', 'Dessert or topping', 'Naturally sweet'],
  },
  {
    id: 'macapuno',
    label: 'Pure Macapuno',
    src: 'assets/macapuno.png',
    size: '320g jar',
    description:
      'Soft macapuno strings in delicate syrup — a premium coconut treat with a luxurious, chewy texture.',
    highlights: ['Premium coconut', 'Halo-halo essential', 'Smooth sweetness'],
  },
  {
    id: 'ube',
    label: 'Ube Jam',
    src: 'assets/ube-jam.png',
    size: '320g jar',
    description:
      'Rich purple yam halaya slow-cooked to a velvety spread — deep ube flavor with the perfect thickness for bread or pastries.',
    highlights: ['Real ube', 'Spreadable texture', 'Filipino favorite'],
  },
  {
    id: 'nata',
    label: 'Nata de Coco',
    src: 'assets/nata-de-coco.png',
    size: '3-pack',
    description:
      'Chewy nata de coco cubes in refreshing syrup — available in classic flavors, ideal for coolers, desserts, and snacks.',
    highlights: ['Refreshing cubes', 'Multiple flavors', 'Party-ready'],
  },
];
