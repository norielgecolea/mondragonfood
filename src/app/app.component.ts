import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SkeletonImageDirective } from './shared/skeleton-image.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SkeletonImageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pageReady = false;
  isResizing = false;
  layoutPulse = false;
  isMobileMenuOpen = false;

  readonly currentYear = new Date().getFullYear();

  private resizeTimer?: ReturnType<typeof setTimeout>;
  private pulseTimer?: ReturnType<typeof setTimeout>;
  private lastBreakpoint = '';

  ngOnInit(): void {
    this.lastBreakpoint = this.getBreakpoint(window.innerWidth);
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.pageReady = true;
      }, 60);
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.isResizing = true;

    const breakpoint = this.getBreakpoint(window.innerWidth);
    if (breakpoint !== this.lastBreakpoint) {
      this.lastBreakpoint = breakpoint;
      this.triggerLayoutPulse();
      if (window.innerWidth >= 1024) {
        this.closeMobileMenu();
      }
    }

    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.isResizing = false;
    }, 420);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  private triggerLayoutPulse(): void {
    this.layoutPulse = true;
    clearTimeout(this.pulseTimer);
    this.pulseTimer = setTimeout(() => {
      this.layoutPulse = false;
    }, 620);
  }

  private getBreakpoint(width: number): string {
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    if (width < 1536) return 'xl';
    return '2xl';
  }
}
