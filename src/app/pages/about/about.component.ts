import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkeletonImageDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private readonly sanitizer: DomSanitizer) {}

  readonly mission =
    'We are dedicated to our promise of producing best quality products to consumers who have relied on us since 2000. We are committed in creating clean and delicious bottled food products to suits local tastes as well as international standards';
  readonly vision =
    'To build on our success and high standards in the food industry. We plan to extend our operations and thereby generating more jobs to help more locality. We also have plan to generate a strong and long-term sustainable competitive advantage thus providing superior returns for our business partners.';
  readonly historyTimeline: TimelineItem[] = [
  {
    year: '1980s',
    title: 'The Humble Beginning',
    description:
      'The Mondragon family started by buying and selling agricultural raw materials such as coconuts and young coconut meat (buko). With limited capital, they supplied factories across CALABARZON using their first delivery jeepney.',
    media: [
      { kind: 'image', src: '', alt: 'The Humble Beginning photo 1' },
      { kind: 'image', src: '', alt: 'The Humble Beginning photo 2' },
    ],
  },
  {
    year: '2000',
    title: 'Mondragon Food Products Established',
    description:
      'The company officially transitioned from supplying raw materials to producing bottled food products. This marked the birth of Mondragon Food Products and the start of its food processing journey.',
    media: [
      { kind: 'image', src: '', alt: 'Mondragon Food Products establishment photo' },
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
        src: '',
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
      { kind: 'image', src: '', alt: 'Current operations photo 1' },
      { kind: 'image', src: '', alt: 'Current operations photo 2' },
      { kind: 'image', src: '', alt: 'Current operations photo 3' },
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
