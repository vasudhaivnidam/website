import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { TeamComponent } from '../../components/team/team.component';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [RouterLink, PageBannerComponent, TeamComponent],
  template: `
    <app-page-banner
      title="Our Team"
      subtitle="Dedicated leaders who guide the Vasudhaivnidam Foundation with vision, integrity, and compassion."
      emoji="👥"
    />
    <app-team />
    <div class="bg-gray-50 py-10 text-center border-t border-gray-100">
      <p class="text-gray-600 mb-4 text-sm">Inspired by our team? Join us as a volunteer or donor.</p>
      <a routerLink="/donate"
        class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
        Support Our Work ❤️
      </a>
    </div>
  `,
})
export class TeamPageComponent {}
