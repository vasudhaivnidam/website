import { Component } from '@angular/core';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [PageBannerComponent, GalleryComponent],
  template: `
    <app-page-banner
      title="Photo Gallery"
      subtitle="Glimpses of our activities, events, camps, and the smiling faces we serve."
      emoji="📸"
    />
    <app-gallery />
  `,
})
export class GalleryPageComponent {}
