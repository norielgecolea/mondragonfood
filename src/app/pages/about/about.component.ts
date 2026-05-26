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

  readonly historyTimeline: TimelineItem[] = [
    {
      year: '1998',
      title: 'Family kitchen beginnings',
      description: 'Mondragon Food Products started as a small home-based operation focused on traditional Filipino flavors.',
      media: [
        { kind: 'image', src: '', alt: 'Family kitchen beginnings photo 1' },
        { kind: 'image', src: '', alt: 'Family kitchen beginnings photo 2' },
      ],
    },
    {
      year: '2008',
      title: 'Local market expansion',
      description: 'We expanded distribution across nearby towns and strengthened partnerships with local growers and suppliers.',
      media: [
        { kind: 'image', src: '', alt: 'Local market expansion photo 1' },
      ],
    },
    {
      year: '2018',
      title: 'Product line growth',
      description: 'Our sinantulan and dessert lines grew into a broader collection made for households, resellers, and events.',
      media: [
        { kind: 'youtube', src: 'https://www.youtube.com/embed/6vg1Q32YkAc', alt: 'Mondragon 2018 milestone video' },
        { kind: 'image', src: '', alt: '2018 product line growth photo' },
      ],
    },
    {
      year: 'Today',
      title: 'Modernizing with purpose',
      description: 'We continue to blend heritage recipes with modern production practices while keeping quality and community first.',
      media: [
        { kind: 'image', src: '', alt: 'Current operations photo 1' },
        { kind: 'image', src: '', alt: 'Current operations photo 2' },
        { kind: 'image', src: '', alt: 'Current operations photo 3' },
      ],
    },
  ];

  readonly executiveTeam: OrgMember[] = [
    { name: 'Maria Mondragon', role: 'Founder & Chairperson', initials: 'MM' },
    { name: 'Antonio Reyes', role: 'General Manager', initials: 'AR' },
  ];

  readonly departmentHeads: OrgMember[] = [
    { name: 'Lea Santos', role: 'Production Lead', initials: 'LS' },
    { name: 'Jessa Cruz', role: 'Quality Assurance', initials: 'JC' },
    { name: 'Paolo Dela Rosa', role: 'Sales & Marketing', initials: 'PD' },
    { name: 'Nina Flores', role: 'Finance & Admin', initials: 'NF' },
  ];

  getTrustedMediaUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
