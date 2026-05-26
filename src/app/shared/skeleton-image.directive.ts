import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appSkeletonImg]',
  standalone: true,
})
export class SkeletonImageDirective implements OnInit {
  private skeletonHost: HTMLElement | null = null;
  private isLoaded = false;

  constructor(
    private readonly host: ElementRef<HTMLImageElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const img = this.host.nativeElement;
    this.skeletonHost = this.resolveSkeletonHost(img);
    this.renderer.addClass(this.skeletonHost, 'img-skeleton-wrap');
    this.renderer.setStyle(img, 'opacity', '0');

    if (img.complete && img.naturalWidth > 0) {
      this.markLoaded();
    }
  }

  @HostListener('load')
  onLoad(): void {
    this.markLoaded();
  }

  @HostListener('error')
  onError(): void {
    this.markLoaded();
  }

  private resolveSkeletonHost(img: HTMLImageElement): HTMLElement {
    const parent = img.parentElement;

    if (parent && this.canUseParentAsHost(parent, img)) {
      return parent;
    }

    const wrapper = this.renderer.createElement('span');
    this.renderer.addClass(wrapper, 'img-skeleton-wrap');

    if (parent) {
      this.renderer.insertBefore(parent, wrapper, img);
      this.renderer.appendChild(wrapper, img);
    }

    return wrapper;
  }

  private canUseParentAsHost(parent: HTMLElement, img: HTMLImageElement): boolean {
    const tag = parent.tagName.toLowerCase();

    if (tag === 'a') {
      return true;
    }

    if (parent.classList.contains('overflow-hidden')) {
      return true;
    }

    return parent.childElementCount === 1 && parent.firstElementChild === img;
  }

  private markLoaded(): void {
    if (this.isLoaded || !this.skeletonHost) {
      return;
    }

    this.isLoaded = true;
    const img = this.host.nativeElement;

    this.renderer.setStyle(img, 'opacity', '1');
    this.renderer.addClass(img, 'img-skeleton-loaded');
    this.renderer.addClass(this.skeletonHost, 'img-skeleton-loaded');
  }
}
