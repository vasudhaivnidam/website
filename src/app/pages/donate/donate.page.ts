import { Component } from '@angular/core';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { DonationComponent } from '../../components/donation/donation.component';

@Component({
  selector: 'app-donate-page',
  standalone: true,
  imports: [PageBannerComponent, DonationComponent],
  template: `
    <app-page-banner
      title="Make a Donation"
      subtitle="Your generosity directly funds education, culture, and community welfare programs."
      emoji="❤️"
    />
    <app-donation />

    <!-- Why Donate -->
    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-10">Why Donate to Us?</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (reason of reasons; track reason.title) {
            <div class="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="text-4xl mb-3">{{ reason.icon }}</div>
              <h3 class="font-bold text-gray-800 mb-2">{{ reason.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ reason.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class DonatePageComponent {
  reasons = [
    {
      icon: '🎓',
      title: '100% Transparent',
      desc: 'Every rupee is accounted for. We publish annual reports showing how donations are spent.',
    },
    {
      icon: '💼',
      title: '80G Tax Benefit',
      desc: 'Donations are eligible for 80G tax deduction under the Income Tax Act, 1961.',
    },
    {
      icon: '🌱',
      title: 'Direct Impact',
      desc: 'Funds go directly to beneficiaries — children, families, and community members.',
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      desc: 'Run entirely by volunteers with minimal overhead, maximizing your contribution\'s impact.',
    },
    {
      icon: '📜',
      title: 'Registered NGO',
      desc: 'Officially registered non-profit organization compliant with all regulatory requirements.',
    },
    {
      icon: '♾️',
      title: 'Recurring Impact',
      desc: 'Set up a monthly donation and make a lasting difference in the lives of many.',
    },
  ];
}
