import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink, PageBannerComponent, AboutComponent],
  template: `
    <app-page-banner
      title="About Us"
      subtitle="Learn about our mission, the values we stand for, and the community we serve."
      emoji="🏛️"
    />
    <app-about />
    <div class="bg-amber-50 py-10 text-center border-t border-orange-100">
      <p class="text-gray-600 mb-4 text-sm">Want to support our cause?</p>
      <a routerLink="/donate"
        class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
        Donate Now ❤️
      </a>
    </div>
  `,
})
export class AboutPageComponent {}
