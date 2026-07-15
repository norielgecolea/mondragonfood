import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SkeletonImageDirective } from '../../shared/skeleton-image.directive';

type TimelineMedia = {
  kind: 'youtube' | 'image';
  src: string;
  alt: string;
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  media: TimelineMedia[];
};

type OrgMember = {
  name: string;
  role: string;
  initials: string;
};

type ValueCard = {
  title: string;
  description: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type StatCard = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, SkeletonImageDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private readonly sanitizer: DomSanitizer) {}

  readonly mission =
    'We are dedicated to our promise of producing best quality products to consumers who have relied on us since 2000. We are committed in creating clean and delicious bottled food products to suits local tastes as well as international standards.';
  readonly vision =
    'To build on our success and high standards in the food industry. We plan to extend our operations and thereby generating more jobs to help more locality. We also have plan to generate a strong and long-term sustainable competitive advantage thus providing superior returns for our business partners.';

  readonly stats: StatCard[] = [
    { value: '2000', label: 'food brand established' },
    { value: '4', label: 'product families' },
    { value: 'Local', label: 'Calauan Laguna' },
  ];

  readonly values: ValueCard[] = [
    {
      title: 'Quality in every batch',
      description:
        'We focus on consistent taste, clean preparation, and dependable bottled products that customers can confidently serve.',
    },
    {
      title: 'Filipino flavor first',
      description:
        'Our recipes are built around familiar Filipino ingredients, comforting coconut-based dishes, and bright local fruit flavors.',
    },
    {
      title: 'Community livelihood',
      description:
        'Growth matters most when it also creates work, supports local supply, and keeps opportunity close to home.',
    },
    {
      title: 'Ready for modern tables',
      description:
        'Every jar is made for convenience without losing the home-cooked character people expect from Filipino food.',
    },
  ];

  readonly processSteps: ProcessStep[] = [
    {
      step: '01',
      title: 'Source',
      description: 'We begin with familiar local produce and ingredients suited to Filipino bottled delicacies.',
    },
    {
      step: '02',
      title: 'Prepare',
      description: 'Recipes are cooked and seasoned for balanced flavor, whether savory, spicy, creamy, or sweet.',
    },
    {
      step: '03',
      title: 'Bottle',
      description: 'Products are packed for shelf-ready convenience while keeping the flavor customers recognize.',
    },
    {
      step: '04',
      title: 'Check',
      description: 'Each batch is handled with attention to cleanliness, consistency, and customer satisfaction.',
    },
  ];

  readonly historyTimeline: TimelineItem[] = [
  {
    year: '1980s',
    title: 'The Humble Beginning',
    description:
      'The Mondragon family started by buying and selling agricultural raw materials such as coconuts and young coconut meat (buko). With limited capital, they supplied factories across CALABARZON using their first delivery jeepney.',
    media: [
      { kind: 'image', src: 'assets/FOR HERO.jpg', alt: 'Mondragon ingredients and product roots' },
      { kind: 'image', src: 'assets/hero.png', alt: 'Mondragon product preparation' },
    ],
  },
  {
    year: '2000',
    title: 'Mondragon Food Products Established',
    description:
      'The company officially transitioned from supplying raw materials to producing bottled food products. This marked the birth of Mondragon Food Products and the start of its food processing journey.',
    media: [
      { kind: 'image', src: 'assets/main-products-table.png', alt: 'Mondragon bottled food product lineup' },
    ],
  },
  {
    year: '2017',
    title: 'The Birth of Original Sinantulan',
    description:
      'What began as a homemade gift for a family member abroad became a breakthrough product. After positive feedback and growing interest on social media, Mondragon’s Original Sinantulan quickly gained popularity.',
    media: [
      {
        kind: 'youtube',
        src: 'https://www.youtube.com/embed/6vg1Q32YkAc',
        alt: 'Original Sinantulan milestone video',
      },
      {
        kind: 'image',
        src: 'assets/sinantulan/sinantulan-original.jpg',
        alt: 'Original Sinantulan launch photo',
      },
    ],
  },
  {
    year: 'Today',
    title: 'Growing the Legacy',
    description:
      'Mondragon Food Products continues to produce high-quality Filipino bottled delicacies, including its renowned Sinantulan and Special Laing. The company remains committed to supporting local communities while expanding its reach and product offerings.',
    media: [
      { kind: 'image', src: 'assets/laing/laing-original.jpg', alt: 'Special Laing product' },
      { kind: 'image', src: 'assets/puso-ng-saging/puso-ng-saging-original.jpg', alt: 'Puso ng Saging product' },
      { kind: 'image', src: 'assets/dessert/jack-fruit.jpg', alt: 'Dessert preserve product' },
    ],
  },
];

 readonly executiveTeam: OrgMember[] = [
  {
    name: 'Hernando Mondragon',
    role: 'Owner & Founder',
    initials: 'HM',
  },
  {
    name: 'Tess Mondragon',
    role: 'Co-Founder',
    initials: 'TM',
  },
];

readonly departmentHeads: OrgMember[] = [
  {
    name: 'Myla Mondragon',
    role: 'Business Operations',
    initials: 'MM',
  },
  {
    name: 'Mark Mondragon',
    role: 'Production Operations',
    initials: 'MK',
  },
  {
    name: 'Micah Mondragon',
    role: 'Brand Ambassador',
    initials: 'MC',
  },
];

  getTrustedMediaUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
